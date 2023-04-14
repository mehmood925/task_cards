import response from "../utility/response.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import user from "../entity/profile.js";
import forgetPasswordOtp from "../entity/forgetPasswordOtp.js";
import env from 'dotenv'
import { validatePasswordToken } from "../middleWare/auth.js";
import passCom from "joi-password-complexity";
env.config();
const _complexityOptions = {
    min: 8,
    max: 26,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
}
class UserService {
    constructor() { }

    async signup(params: any) {

        /* Password Validation */
        const pass = passCom(_complexityOptions).validate(params.password); // password validation
        if (pass.error) {
            return new response(601, 'Password Should Be Betweem 8 - 26 Characters And Must Include Atleast One Lower Case, Upper Case, Numeric And Symbol');
        }

        /* Check for existing same email and username */
        let _existingProfile: any = await user.findOne({ email: params.email }).select('_id');
        if (_existingProfile) {
            return new response(602, 'Email Already Exists');
        }

        const _profile: any = new user();
        
        _profile.email = params.email;
        _profile.password = bcrypt.hashSync(params.password, bcrypt.genSaltSync(2));
        _profile.createdAt = new Date().toUTCString();
        _profile.updatedAt = new Date().toUTCString();

        await _profile.save();

        return new response(201, 'Record Created Successfully');
    }

    async signin(params: any) {
        const _profile: any = await user.findOne({ email: params.email }).select('_id email username password');
        if (!_profile) {
            return new response(604, 'Incorrect Email or Password');
        }
        if (!await bcrypt.compare(params.password, _profile.password)) {
            return new response(604, 'Incorrect Email or Password');    
        }
        const _key: string = process.env.TOKEN_KEY ? process.env.TOKEN_KEY : ''
        const _token = jwt.sign(
            { userID: _profile._id, username: _profile.username },
            _key,
            { expiresIn: "2h" }
        )


        return new response(200, _token);
    }

    async forgetPassword(params: any) {
        const _profile: any = await user.findOne({ email: params.email }).select('id');
        if (!_profile) {
            return new response(200, '');
        }
        const _tokenKey: string = process.env.FORGET_PASSWORD_TOKEN_KEY ? process.env.FORGET_PASSWORD_TOKEN_KEY : ''
        const _otp = jwt.sign(
            { userID: _profile.id },
            _tokenKey,
            { expiresIn: "1h" }
        )
        const _otpCheck = await forgetPasswordOtp.findOne({ email: params.email });
        if (!_otpCheck) {
            const _forgetPasswordOtp = new forgetPasswordOtp();
            _forgetPasswordOtp._id = _profile.id;
            _forgetPasswordOtp.otp = _otp;
            _forgetPasswordOtp.userId = _profile.id;
            _forgetPasswordOtp.userEmail = params.email;
            _forgetPasswordOtp.createdAt = new Date().toUTCString();
            _forgetPasswordOtp.updatedAt = new Date().toUTCString();
            await _forgetPasswordOtp.save();
        }
        else {
            const _update: any = await forgetPasswordOtp.updateOne({ email: params.email }, { otp: _otp, updatedAt: new Date().toUTCString() });
        }
        return new response(200, _otp);
    }

    async resetPassword(params: any) {
        if (params.password !== params.confirmPassword) {
            return new response(606, 'Password And Confirm Password Must Be Same');
        }
        const _passwordValidation = passCom(_complexityOptions).validate(params.password); // password validation
        if (_passwordValidation.error) {
            return new response(601, 'Password Should Be Betweem 8 - 26 Characters And Must Include Atleast One Lower Case, Upper Case, Numeric And Symbol');
        }
        const _user: any = validatePasswordToken(params.token)
        const _profile: any = await user.findById(_user.userID).select('_id email');
        if (!_profile) {
            return new response(605, 'Your OTP Is Expired');
        }
        const _otpCheck = await forgetPasswordOtp.findOne({ email: params.email });
        if (!_otpCheck) {
            return new response(605, 'Your OTP Is Expired');
        }
        if (params.token !== _otpCheck.otp) {
            return new response(605, 'Your OTP Is Expired');
        }
        if (_user.userID !== _profile.id) {
            return new response(605, 'Your OTP Is Expired');
        }
        const _hash = bcrypt.hashSync(params.password, bcrypt.genSaltSync());

        await forgetPasswordOtp.deleteOne({ _id: _otpCheck._id });
        await user.updateOne({ _id: _profile.id }, { password: _hash, updatedAt: new Date().toUTCString() });

        return new response(200, 'Success');
    }
}
export default UserService; 
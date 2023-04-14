import mongoose from 'mongoose'

const forgetPasswordOtpSchema = new mongoose.Schema({

    userId: { type: String, require: true },
    userEmail: { type: String, require: true },
    otp: { type: String, require: true },
    createdAt: { type: String, require: true },
    updatedAt: { type: String, require: true }
});

const forgetPasswordOtp = mongoose.model('forgetpasswordotps', forgetPasswordOtpSchema);

export default forgetPasswordOtp
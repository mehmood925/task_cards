import express from "express"
import validationMiddleware from "../middleWare/validation.js";
import userValidation from "../validations/user.js"
import userService from "../service/user.js";

const router = express.Router();

router.post("/signup", validationMiddleware(userValidation.signup), async (req: any, res: any, _next: any) => {
    try {
        const _service = new userService();
        const _response = await _service.signup(req.body);
        return res.send(_response);
    }
    catch (err) {
        return res.send(err);
    }
});

router.post("/signin", validationMiddleware(userValidation.signin), async (req: any, res: any, _next: any) => {
    try {
        const _service = new userService();
        const _response = await _service.signin(req.body);
        return res.send(_response);
    }
    catch (err) {
        return res.send(err);
    }
});

router.post("/forget-password", validationMiddleware(userValidation.forgetPassword), async (req: any, res: any, _next: any) => {
    try {
        const _service = new userService();
        const _response = await _service.forgetPassword(req.body);
        return res.send(_response);
    }
    catch (err) {
        return res.send(err);
    }
});

router.post("/reset-password", validationMiddleware(userValidation.resetPassword), async (req: any, res: any, _next: any) => {
    try {
        req.body.token = req.query.otp ? req.query.otp : ''
        const _service = new userService();
        const _response = await _service.resetPassword(req.body);
        return res.send(_response);
    }
    catch (err) {
        return res.send(err);
    }
});

export default router;
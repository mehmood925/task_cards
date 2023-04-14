import Joi from "joi";

export default {
    signup: Joi.object({
        email: Joi.string().min(3).max(50).trim().regex(new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)).required(),
        password: Joi.string().max(50).required(),
    }),
    signin: Joi.object({
        email: Joi.string().min(3).max(50).trim().regex(new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)).required(),
        password: Joi.string().max(50).required(),
    }),
    forgetPassword: Joi.object({
        email: Joi.string().min(3).max(50).trim().regex(new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)).required(),
    }),
    resetPassword: Joi.object({
        password: Joi.string().max(50).required(),
        confirmPassword: Joi.string().max(50).required(),
    }),
}

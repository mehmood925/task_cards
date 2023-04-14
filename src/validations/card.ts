import Joi from "joi";

export default {
    create: Joi.object({
        title: Joi.string().min(1).max(255).required(),
        assignee: Joi.string().min(1).max(255).required(),
        project: Joi.string().valid('General', 'Design', 'Development', 'Marketing').required(),
        state: Joi.string().valid('ToDo', 'InProgress', 'InReview', 'Completed').required(),
    }),
}

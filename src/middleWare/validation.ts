import response from "../utility/response.js";


const validationMiddleware = (validationObject: any) => (req: any, res: any, next: any) => {
  const schema: any = validationObject
  const { error } = schema.validate(req.body);
  if (error) {
    return res.send(new response(600, error.message));
  }
  return next()
}

export default validationMiddleware;

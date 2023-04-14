import jwt from "jsonwebtoken";
import response from "../utility/response.js";

const config = process.env;

const verifyToken = async (req: any, res: any, next: () => any) => {

  const token = await validateToken(req);
  if (token == 404) {
    return res.status(200).send(new response(401, 'UnAuthorized'));
  } else {
    req.body.user = token;
  }

  return next();
};

export async function validateToken(req: any) {
  const token =
    req.body.token || req.query.token || req.headers["authorization"];
  if (!token) {
    return 404;
  }
  const _key: string = process.env.TOKEN_KEY ? process.env.TOKEN_KEY : ''
  try {
    const user:any = jwt.verify(token, _key);
    return user;
  }
  catch (err) {
    return 404
  }


}

export function validatePasswordToken(token: any) {
  if (!token) {
    return 404;
  }
  const _key: string = process.env.FORGET_PASSWORD_TOKEN_KEY ? process.env.FORGET_PASSWORD_TOKEN_KEY : ''
  try {
    const user = jwt.verify(token, _key);
    return user;
  }
  catch (err) {
    return 404
  }
}



export default verifyToken;
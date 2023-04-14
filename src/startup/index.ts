import user from "../route/user.js"
import application from "../route/card.js"

import path from "path";

const initializeRoutes = (app: any) => {

  app.use(path.join("/api/v1/card"), application);
  app.use(path.join("/api/v1/user"), user);
}
export default function (app: any) {
  initializeRoutes(app)
};


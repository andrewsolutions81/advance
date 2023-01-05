import AuthRoute from "./Api/Routes/AuthRoute.js"
import UserRoute from "./Api/Routes/UserRoute.js"

/* Usage of Routes */
function appRoutes(app) {
  app.use('/auth', AuthRoute);
  app.use('/user', UserRoute);
};


export {appRoutes}

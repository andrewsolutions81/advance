import AuthRoute from "./Api/Routes/AuthRoute.js"
import UserRoute from "./Api/Routes/UserRoute.js"
import PostRoute from "./Api/Routes/PostRoute.js"

/* Usage of Routes */
function appRoutes(app) {
  app.use('/auth', AuthRoute);
  app.use('/user', UserRoute);
  app.use('/post', PostRoute);
};


export {appRoutes}

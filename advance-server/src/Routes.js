import healthcheck from "./healthcheck.js"
import AuthRoute from "./Api/Routes/AuthRoute.js"
import UserRoute from "./Api/Routes/UserRoute.js"
import PostRoute from "./Api/Routes/PostRoute.js"
import UploadRoute from "./Api/Routes/UploadRoute.js"

/* Usage of Routes */
function appRoutes(app) {
  app.use('/healthcheck', healthcheck);
  app.use('/auth', AuthRoute);
  app.use('/user', UserRoute);
  app.use('/post', PostRoute);
  app.use('/upload', UploadRoute);
};


export {appRoutes}

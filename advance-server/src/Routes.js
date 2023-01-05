import AuthRoute from "./Api/Routes/AuthRoute.js"

/* Usage of Routes */
function appRoutes(app) {
  app.use('/auth', AuthRoute);
};


export {appRoutes}

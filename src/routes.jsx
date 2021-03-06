import { Route } from 'react-router';
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';
import todoRoutes from 'TodoApp/client/routes';

ReactRouterSSR.Run(
  <Route>
    {todoRoutes}
  </Route>
);

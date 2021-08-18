import { Switch, Route, Redirect } from 'react-router-dom';

import { Start } from '../Pages/Start';
import { Game } from '../Pages/Game';

export const AppRoutes = () => (
   <Switch>
      <Route path="/Game" render={(props) => <Game {...props} />} />
      <Route path="/" render={(props) => <Start {...props} />} />
      <Route render={() => <Redirect to="/" />} />
   </Switch>
);

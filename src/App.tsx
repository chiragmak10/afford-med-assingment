import { ReactElement } from "react";
import { FC } from "react";
import { Login } from "./Login";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./Navbar";
export const App: FC = (): ReactElement => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/signup" component={Login} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

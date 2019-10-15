import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Index";
import DashBoard from "./pages/DashBoard/Index";
import New from "./pages/New/Index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/new" component={New} />
      </Switch>
    </BrowserRouter>
  );
}

import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import DashBoard from "./components/dashboard/DashBoard";
import Users from "./components/users/Users";
import MainPage from "./components/mainPage/MainPage";
import Albums from "./components/albums/Albums";
import React from "react";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/albums" component={Albums} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/" component={MainPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

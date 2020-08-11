import React from "react";
import "./App.css";
import "./Styles/main.scss";
import SignUp from "./Components/SignUp";
import { Switch, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import Dashboard from "./Components/Dashboard";
import Axios from "axios";

if (localStorage.token) {
  Axios.defaults.headers.common["authorization"] = localStorage.token;
}
function App() {
  return (
    <React.Fragment>
      <div className="header">
        <h1> Sound Vault </h1>
        <h2>Best place to save your sound bits</h2>
      </div>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </React.Fragment>
  );
}

export default App;

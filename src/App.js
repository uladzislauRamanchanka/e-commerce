import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Router, Switch } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div>
      <Switch>
        <Router exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

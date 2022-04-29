import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./components/Login";

import "./App.css";

function App() {
  const username = prompt("Enter Github Username");
  
  return (
    <BrowserRouter>
      <Switch>
        
        <Login/>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;

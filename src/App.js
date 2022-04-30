import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./components/Login";

import "./App.css";

function App() {
  
  
  return (
    <BrowserRouter>
      <Switch>
        
        <Login/>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;

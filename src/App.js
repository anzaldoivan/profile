import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import Nav from "./Components/Nav"
import Home from "./Pages/Home"
import Db from "./Pages/Db"
import Profile from "./Pages/Profile"
import Table from "./Pages/Table"
import Teams from "./Pages/Teams"

function App(){
  return(
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Db} />
          <Route path="/players" component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/teams" exact component={Teams} />
          <Route path="/table" exact component={Table} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;

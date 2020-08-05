import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TheNav from "./Components/TheNav"
import Home from "./Pages/Home"
import Db from "./Pages/Db"
import Profile from "./Pages/Profile"
import Table from "./Pages/Table"
import Teams from "./Pages/Teams"

document.title = "IOSoccer Sudamerica Stats";
document.description = "Sitio web basado en PESMASTER cuyo fin es crear perfiles en tiempo real de los distintos usuarios de la comunidad de IOSoccer Sudamerica.";

/*<Switch>
          <Route path="/db" exact component={Db} />
          <Route path="/players" component={Home} />
          <Route path="/" exact component={Profile} />
          <Route path="/teams" exact component={Teams} />
          <Route path="/table" exact component={Table} />
</Switch>*/

function App(){
  return(
    <Router>
      <div className="App">
        <TheNav />
        <Profile />
      </div>
    </Router>
  )
}

export default App;

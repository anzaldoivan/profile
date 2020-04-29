import React, { useState } from 'react';
import '../App.css';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'


import Index from "../Components/Index"
import Clubs from "../Components/Clubs"
import Buttons from "../Components/Buttons"
import Footer from "../Components/Footer"
import Players from "../Components/Players"
import Avatar from "../Components/Avatar"
import Radar from "../Components/Radar"
import Select from "../Components/Select"
import Stats from "../Components/Stats"
import Lore from "../Components/Lore"
import Card from "../Components/Card"
import MyTable from "../Components/MyTable"

class Table extends React.Component {
  
  render() {
    const players = require("../Components/players.json");
    return <div>
      <div className="espacio"> 
        <MyTable />
      </div>
    </div>
  }    
}


export default Table;
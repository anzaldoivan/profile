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

class Home extends React.Component {
  
  state = {
    loading: true,
    match: null,
    steam: null,
    playerStatistics: null,
    switch: false
  }

  async componentDidMount() {
    const url = "https://stats.iosoccer-sa.bid/api/everything";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({playerStatistics:data[0]. teams[1]. playerStatistics[0], loading:false}); 
    this.setState({match:data[0]});
    console.log(data[0]. teams[1]. playerStatistics[0]);
  }

  //async componentDidMount() {
    //const url = "http://stats.iosoccer-sa.bid/api/player/STEAM_0:1:32216071/all";
    //const response = await fetch(url);
    //const data = await response.json();
    //this.setState({playerStatistics:data[0], loading:false});
   // console.log(data[0]);
  //}


  render() {
    //const playersComponents = playersData.map(players => <Players key={players.key} name={players.name} club={players.club} position={players.position} />)
    //borrar el info / statistics. en los state de abajo
    //<div>{this.state.playerStatistics.info.name}</div> 
    //<div>{this.state.playerStatistics.info.steamID}</div>
    //<div>Goles: {this.state.playerStatistics.statistics.goals}</div>
    //<div>Asistencias: {this.state.playerStatistics.statistics.assists}</div>
    //<div>Tiros: {this.state.playerStatistics.statistics.shots} ({this.state.playerStatistics.statistics.shotsontarget})</div>
    //<div>Pases: {this.state.playerStatistics.statistics.passes} ({this.state.playerStatistics.statistics.passescompleted})</div>
    //<div>Intercepciones: {this.state.playerStatistics.statistics.interceptions}</div>
    //<div>Faltas: {this.state.playerStatistics.statistics.fouls}</div>
    //<div>Offsides: {this.state.playerStatistics.statistics.offsides}</div>
    //<div>Tackles: {this.state.playerStatistics.statistics.tackles}</div>
    //<div>Faltas sufridas: {(this.state.playerStatistics.statistics.goals)}</div> 

    const players = require("../Components/players.json");
    
    if (this.state.loading) {
      return <div><img>src={require(`../images/iossa.gif`)}</img>loading ...</div>
    }
    
    //<Avatar />

    if (!this.state.loading) { 

      return <div>
          <div> 
            <Stats />
            <Lore />
          </div>
        </div>
      }

    return (
          
          <div className="App">
            <Index />
            <Clubs />
            <Buttons />
            <Footer />
          </div>
    
      );

      
    }
    
}


export default Home;

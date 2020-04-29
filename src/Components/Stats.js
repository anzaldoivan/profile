import React, {useState, useEffect} from 'react'

import * as SteamID from '@node-steam/id';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import '../App.css';

import axios from 'axios';

import {
  fromAccountID,
  ID,
  Instance,
  Type,
  Universe,
} from '@node-steam/id';

function Stats(){

    const [name, setName] = useState(0);
    const [steamID, setSteamID] = useState(0);
    const [goals, setGoals] = useState(0);
    const [matches, setMatches] = useState(0);
    const [assists, setAssists] = useState(0);
    const [shots, setShots] = useState(0);
    const [shotsontarget, setShotsontarget] = useState(0);
    const [passes, setPasses] = useState(0);
    const [passescompleted, setPassescompleted] = useState(0);
    const [interceptions, setInterceptions] = useState(0);
    const [fouls, setFouls] = useState(0);
    const [offsides, setOffsides] = useState(0);
    const [tackles, setTackles] = useState(0);
    const [tacklescompleted, setTacklescompleted] = useState(0);
    const [possession, setPossession] = useState(0);

    const players = require("./players.json");
    const [playerID, setPlayerID] = useState("STEAM_0:0:41134189");

    const [url, setCount] = useState(0);
    const [avatar, setAvatar] = useState([]);
    const idd = new ID(playerID);
    const [id, setId] = useState(0);
  
    const SteamAPI = require('steamapi');
    const steam = new SteamAPI('EC93B358FBCA4A90D62433C974003873');

    const AF = ((goals*15+shotsontarget+assists*10)/matches)*2.05;
    const AD = ((interceptions/matches)*2.5+(tacklescompleted/matches))*2.05;
    const CC = ((passescompleted+assists*10+possession*10)/matches)*2.05;
    const val_def = (AD * 2.8 + AF / 3 + CC / 2.5)/3;
    const val_del = ( AF * 2.8 + AD / 3 + CC / 2.5)/3;
    const val_mca = ( CC * 2.8 + AD / 4.2 + AF / 3.1) / 3 
    const val_mcd = ( CC * 2.8 + AD / 3.1 + AF / 4.2) / 3 

    const fetchUser = async () => {
      const apiCall = await fetch (`http://stats.iosoccer-sa.bid/api/player/${playerID}/all`);
      const user = await apiCall.json();
      //call setName below to change the state 'name'
      setName(user[0].name);
      setMatches(user[0].matches);
      setGoals(user[0].goals);
      setAssists(user[0].assists);
      setShots(user[0].shots);
      setShotsontarget(user[0].shotsontarget);
      setPasses(user[0].passes);
      setPassescompleted(user[0].passescompleted);
      setInterceptions(user[0].interceptions);
      setFouls(user[0].fouls);
      setOffsides(user[0].offsides);
      setTackles(user[0].tackles);
      setTacklescompleted(user[0].tacklescompleted);
      setPossession(user[0].possession);
      console.log(user[0]);
    }

    const fetchUser2 = async () => {
      const apiCall2 = await fetch (`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=EC93B358FBCA4A90D62433C974003873&steamids=${idd}`);
      const user2 = await apiCall2.json();
      //call setName below to change the state 'name'
      setAvatar(user2.response.players[0].avatarfull);
      console.log(user2.response.players[0].avatarfull);
      steam.resolve('https://steamcommunity.com/id/Casana').then(id => {
        //console.log(id); // 76561198146931523
        setId(idd.getSteamID64());
    });

  steam.getUserSummary('76561198146931523').then(url => {
    setCount(url.avatar.large);
    /**
    PlayerSummary {
        avatar: {
            small: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7f/7fdf55394eb5765ef6f7be3b1d9f834fa9c824e8.jpg',
            medium: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7f/7fdf55394eb5765ef6f7be3b1d9f834fa9c824e8_medium.jpg',
            large: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7f/7fdf55394eb5765ef6f7be3b1d9f834fa9c824e8_full.jpg'
        },
        steamID: '76561198146931523',
        url: 'http://steamcommunity.com/id/DimGG/',
        created: 1406393110,
        lastLogOff: 1517725233,
        nickname: 'Dim',
        primaryGroupID: '103582791457347196',
        personaState: 1,
        personaStateFlags: 0,
        commentPermission: 1,
        visibilityState: 3
    }
    */
    });
    }

    useEffect(() => {
      fetchUser();
      fetchUser2();
    }, [playerID])
    

    const data = [
      {
        data: {
          battery: 0.7,
          design: .8,
          useful: 0.9,
        },
        meta: { color: 'blue' }
      },
      {
        data: {
          battery: 0.6,
          design: .85,
          useful: 0.5,
        },
        meta: { color: 'red' }
      }
    ];
 
    const captions = {
      // columns
      battery: 'Poder Ofensivo',
      design: 'Aptitud Defensiva',
      useful: 'Participacion Juego',
    };
 

    //(`http://stats.iosoccer-sa.bid/api/player/${id}/all`)

    return(
      <div>
        <div className="avatar">
        <>
          <select
            value={playerID}
            onChange={e => setPlayerID(String(e.target.value))}
          >
            {players.players.map(player => (
              <option key={player.steam} value={player.steam}>
                {player.name}
              </option>
            ))}
          </select>
          <div>{playerID}</div>
          <div>{id}</div>
        <img src={avatar}></img>
        </>
        
      </div>
        <div className="stats">
        <div>{name}</div>
            <div>AF {Math.trunc(AF)}</div>
            <div>AD {Math.trunc(AD)}</div>
            <div>CC {Math.trunc(CC)}</div>
            <div>CB: {Math.trunc(val_def)} DL: {Math.trunc(val_del)} MCA: {Math.trunc(val_mca)} MCD: {Math.trunc(val_mcd)}</div>
        <div>Matches: {matches}</div>
        <div>Possession: {Math.trunc(possession)}%</div>
        <div>Goals: {goals}</div>
        <div>Assists: {assists}</div>
        <div>Shots: {shots} ({shotsontarget})</div>
        <div>Passes: {passes} ({passescompleted})</div>
        <div>Interceptions: {interceptions}</div>
        <div>Fouls: {fouls}</div>
        <div>Offsides: {offsides}</div>
        <div>Tackles: {tackles} ({tacklescompleted})</div>
        </div>
        <div className="radar">
        <RadarChart
        captions={{
        // columns
          battery: 'Poder Ofensivo',
          design: 'Aptitud Defensiva',
          useful: 'Participacion Juego',
        }}
        data={[
        // data
          {
            data: {
              battery: ((goals*15+shotsontarget+assists*10)/matches)*2.05/100,
              design: ((interceptions/matches)*2.5+(tacklescompleted/matches))*2.05/100,
              useful: ((passescompleted+assists*10+possession*10)/matches)*2.05/100,
            },
            meta: { color: '#58FCEC' }
          },
        ]}
        size={400}
      />
      </div>
    </div>
    )

}

export default Stats
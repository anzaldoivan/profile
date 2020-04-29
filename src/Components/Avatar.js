import React, {useState, useEffect} from 'react'
import '../App.css'
import * as SteamID from '@node-steam/id';
import axios from 'axios';

import {
    fromAccountID,
    ID,
    Instance,
    Type,
    Universe,
} from '@node-steam/id';

function Avatar() {
  

    const [url, setCount] = useState(0);
    const [id, setId] = useState(0);
    const [avatar, setAvatar] = useState([]);
  
    const SteamAPI = require('steamapi');
    const steam = new SteamAPI('EC93B358FBCA4A90D62433C974003873');

    const players = require("./players.json");
    const [playerID, setPlayerID] = useState("STEAM_0:0:41134189");
    const idd = new ID(playerID);

    useEffect(() => {
      axios.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=EC93B358FBCA4A90D62433C974003873&steamids=${idd}`)
        .then(res => {
          console.log(res.data.response.players[0].avatarfull)
          setAvatar(res.data.response.players[0].avatarfull)
        })
        .catch(err => {
          console.log(err)
        })
    })
    
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



    return (
        
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
        </>
        <div>{id}</div>
        <img src={avatar}></img>
        
      </div>
    );
  }

  //<p>URL foto: {url} </p>

  export default Avatar
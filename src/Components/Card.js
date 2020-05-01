import React, {useState, useEffect} from 'react'
import {doSomethingWithInput, justAnAlert, steamid_to_64bit} from './Util.js'


import * as SteamID from '@node-steam/id';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import '../App.css';


// importamos AXIOS que nos sirve hacer los fetch con las API
import axios from 'axios';

import {
  fromAccountID,
  ID,
  Instance,
  Type,
  Universe,
} from '@node-steam/id';

function Card(){

    //Creamos los hooks que usaremos a lo largo de todo el programa para identificar las estadisticas
    const [name, setName] = useState(0);
    const [team, setTeam] = useState(0);
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
    const [saves, setSaves] = useState(0);
    const [savescaught, setSavescaught] = useState(0);
    const [goalsconceded, setGoalsconceded] = useState(0);
    const [secondsplayed, setSecondsplayed] = useState(0);
    const [totalmatches, setTotalmatches] = useState(0);

    const [passavg, setPassavg] = useState(0);
    const [assistavg, setAssistavg] = useState(0);
    const [posavg, setPosavg] = useState(0);
    const [attackassistavg, setAttackassistavg] = useState(0);
    const [interavg, setInteravg] = useState(0);
    const [tackleavg, setTackleavg] = useState(0);
    const [finavg, setFinavg] = useState(0);
    const [preavg, setPreavg] = useState(0);
    const [savesavg, setSavesavg] = useState(0);
    const [savespercentavg, setSavespercentavg] = useState(0);
    const [concededavg, setConcededavg] = useState(0);

    const [t0, setT0] = useState(0);
    const [t1, setT1] = useState(0);
    const [t2, setT2] = useState(0);
    const [t3, setT3] = useState(0);
    const [t4, setT4] = useState(0);
    const [t5, setT5] = useState(0);
    const [t0real, setT0real] = useState(true);
    const [t1real, setT1real] = useState(true);
    const [t2real, setT2real] = useState(true);
    const [t3real, setT3real] = useState(true);
    const [t4real, setT4real] = useState(true);
    const [t5real, setT5real] = useState(true);
    const [america, setAmerica] = useState(0);
    const [maradei, setMaradei] = useState(0);
    const [master, setMaster] = useState(0);
    const [maradeireal, setMaradeireal] = useState(true);
    const [masterreal, setMasterreal] = useState(true);
    const [americareal, setAmericareal] = useState(true);
    const [maradeiteam, setMaradeiteam] = useState(0);
    const [masterteam, setMasterteam] = useState(0);
    const [americateam, setAmericateam] = useState(0);
    const [t0team, setT0team] = useState(0);
    const [t1team, setT1team] = useState(0);
    const [t2team, setT2team] = useState(0);
    const [t3team, setT3team] = useState(0);
    const [t4team, setT4team] = useState(0);
    const [t5team, setT5team] = useState(0);
    
    const players = require("./players.json");
    const torneos = require("./torneos.json");
    const [playerID, setPlayerID] = useState("STEAM_0:0:41134189");
    const [tID, setTID] = useState("all");

    const [url, setCount] = useState(0);
    const [avatar, setAvatar] = useState([]);
    const idd = new ID(playerID);
    const [actualovr, setActualovr] = useState("0");
    const [id, setId] = useState(0);
    const [id2, setId2] = useState(0);
  
    const SteamAPI = require('steamapi');
    const steam = new SteamAPI('XDDDDDDDDDDDDDDDDDDDDDDDDDDDDD');

    const totaltime = secondsplayed/60/90 > matches ? matches : secondsplayed/60/90;
    console.log("a ver el totaltime");
    console.log(totaltime);
    console.log(secondsplayed/60/90);
    console.log(matches);
    // creamos la variable theteam para convertir el nombre del equipo a sus iniciales, y que de esta forma los banners sean visibles (se buguea si tiene espacios)
    const theteam = team.toString().toLowerCase() == 
    "meteors gaming" ? "mg" : 
    team.toString().toLowerCase() == "coldchester fc" ? "ccfc" : 
    team.toString().toLowerCase() == "inter" ? "inter" : 
    team.toString().toLowerCase() == "galactic boys" ? "gb" : 
    team.toString().toLowerCase() == "los magorditos" ? "mago" :
    team.toString().toLowerCase() == "viral team" ? "viral" :
    team.toString().toLowerCase() == "layuve" ? "layuve" :
    team.toString().toLowerCase() == "velez sarsfield" ? "velez" :
    team.toString().toLowerCase() == "merca doçura" ? "mds" :
    team.toString().toLowerCase() == "peñarol" ? "peñarol" :
    team.toString().toLowerCase() == "ac milanesa" ? "acm" : "0"
    ;
    const temporada = tID == 
    "t1" ? "Temporada 1" : 
    tID == "master" ? "Copa Master" : 
    tID == "t2" ? "Temporada 2" : 
    tID == "t3" ? "Temporada 3" : 
    tID == "t4" ? "Temporada 4" :
    tID == "t0" ? "Temporada 0" :
    tID == "t5" ? "Temporada 5" :
    tID == "maradei" ? "Copa Maradei" : 
    tID == "copaamerica" ? "Copa America" :
    "Total"
    ;
    console.log(theteam);
    

    // declaramos las formulas de las variables que usaremos a lo largo del programa, 
    // sus elementos cambian constantemente dependiendo el fetch que hagamos. por default es el fetch de todas las estadisticas
    //const AF = ((goals*15+shotsontarget+assists*10)/totaltime)*2.05;
    //const AD = ((interceptions/totaltime)*2.5+(tacklescompleted/totaltime))*2.05;
    //const CC = ((passescompleted+assists*10+possession*10)/totaltime)*2.05;
    const CP = (savesavg+savespercentavg+concededavg)/3;
  
    //const CC = (passescompleted/totaltime*5+assists/totaltime*90+possession*7)/3
    const CC = Math.round((passavg+assistavg+posavg)/3)
    const AF = (finavg+preavg+attackassistavg)/3;
    const AD = interavg;
    /*const val_def = (AD * 2.8 + AF / 3 + CC / 2.5)/3;
    const val_del = ( AF * 2.8 + AD / 3 + CC / 2.5)/3;
    const val_mca = ( CC * 2.8 + AD / 5.8 + AF * 0.5) / 3;
    const val_mcd = ( CC * 2.8 + AD * 0.5 + AF / 5.8) / 3;
    */
    const val_def = (AD * 2.3 + AF / 2.5 + CC / 2)/3;
    const val_del = ( AF * 2.3 + AD / 2.5 + CC / 2)/3;
    const val_mca = ( CC + AF ) / 2;
    const val_mcd = ( CC + AD ) / 2;
    const val_gk = CP;
    //const val_mca = ( CC * 2.8 + AD / 4.2 + AF / 3.1) / 3 formulas viejas;
    //const val_mcd = ( CC * 2.8 + AD / 3.1 + AF / 4.2) / 3;
    // pendiende analizar si ovrT sigue teniendo un valor util, en todo caso borrarlo
    const ovrT = Math.trunc((t1+t2+t3+t4)/4);
    let ovr;
    let ovrt1;
    let pos;
    // if para determinar el total predominante entre las posiciones
    if(val_def>=val_del){
      if(val_def>=val_mca){
        if(val_def>=val_mcd){
          ovr = Math.trunc(val_def);
        }else{
          ovr = Math.trunc(val_mcd);
        }
      }else{
        if(val_mca>=val_mcd){
          ovr = Math.trunc(val_mca);
        }else{
          ovr = Math.trunc(val_mcd);
        }
      }
    }else{
      if(val_del>=val_mca){
        if(val_del>=val_mcd){
          ovr = Math.trunc(val_del);
        }else{
          ovr = Math.trunc(val_mcd);
        }
      }else{
        if(val_mca>=val_mcd){
          ovr = Math.trunc(val_mca);
        }else{
          ovr = Math.trunc(val_mcd);
        }
      }
    }
    if(ovr<CP){
      ovr = Math.trunc(CP);
    }

    const contador = 0 + (t1real ? 1 : 0)+(t0real ? 1 : 0)+(t2real ? 1 : 0)+(t3real ? 1 : 0)+(t4real ? 1 : 0)+(t5real ? 1 : 0)+(maradeireal ? 1 : 0)+(masterreal ? 1 : 0)+(americareal ? 1 : 0);
    const over = Math.round(( 0 + (t0real ? t0 : 0) + (t1real ? t1 : 0) + (t2real ? t2 : 0) + (t3real ? t3 : 0) + (t4real ? t4 : 0) + (t5real ? t5 : 0) + (masterreal ? master : 0) + (maradeireal ? maradei : 0)+ (americareal ? america : 0)));
    const ovrtotal = tID == "all" ? (over == 0 ? ovr : Math.round(over/contador)) : ovr;
    const CPtotal = tID == "all" ? Math.round(( 0 + (t0real ? t1 : 0) + (t1real ? t1 : 0) + (t2real ? t2 : 0) + (t3real ? t3 : 0) + (t4real ? t4 : 0) + (t5real ? t5 : 0) + (masterreal ? master : 0) + (maradeireal ? maradei : 0) + (americareal ? america : 0) ) / contador) : ovr;

    // if para determinar la posicion mas valorada
    if(val_def>=val_del){
      if(val_def>=val_mca){
        if(val_def>=val_mcd){
          if(val_def>=val_gk){
            pos = "CB";
          }else{
            pos = "GK";
          }
        }else{
          if(val_mcd>=val_gk){
            pos = "MCD";
          }else{
            pos = "GK";
          } 
        }
      }else{
        if(val_mca>=val_mcd){
          if(val_mca>=val_gk){
            pos = "MCA";
          }else{
            pos = "GK";
          }
        }else{
          if(val_mcd>=val_gk){
            pos = "MCD";
          }else{
            pos = "GK";
          }
        }
      }
    }else{
      if(val_del>=val_mca){
        if(val_del>=val_mcd){
          if(val_del>=val_gk){
            pos = "CF";
          }else{
            pos = "GK";
          }
        }else{
          pos = "MCD";
        }
      }else{
        if(val_mca>=val_mcd){
          if(val_gk >= val_mca){
            pos = "GK";
          }else{
            pos = "MCA";
          }
        }else{
          if(val_mcd>=val_gk){
            pos = "MCD";
          }else{
            pos = "GK";
          }
        }
      }
    }

    const fetchUser = async () => {
      const apiCall = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID}/${tID}`);
      const user = await apiCall.json();
      //call setName below to change the state 'name'
      // fetch inicial, por default agarra la playerID mia y la temporada es la de "all"
      setName(user[0].name);
      setTeam(user[0].team);
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
      setSaves(user[0].saves);
      setSavescaught(user[0].savescaught);
      setGoalsconceded(user[0].goalsconceded);
      setSecondsplayed(user[0].secondsplayed);

      setId(steamid_to_64bit(playerID));
      document.title = user[0].name;
      const actualtime = user[0].secondsplayed/60/90 > user[0].matches ? user[0].matches : user[0].secondsplayed/60/90;
      const PASS = Math.round(user[0].passescompleted/actualtime*5);
      const ASISS = Math.round(user[0].assists/actualtime*140);
      const TACKLE = Math.round(user[0].tacklescompleted/user[0].tackles*100*4.5);
      const POSS = Math.round(user[0].possession*8);
      const INTER = Math.round((user[0].interceptions/actualtime*2.5+user[0].tacklescompleted/actualtime)*2.05);
      const FIN = Math.round(user[0].goals/actualtime*70);
      const PRE = Math.round((user[0].shotsontarget/user[0].shots*100));
      const SAVEPERCENT = Math.round((user[0].savescaught/user[0].saves)*100);
      const ATASISS = Math.round(doSomethingWithInput(ASISS));
      const SAVE = Math.round((user[0].saves/actualtime*11));
      let SAVES = user[0].saves;
      if(SAVES==0){
        SAVES=1;
      }
      const CONCEDED = Math.abs(((user[0].goalsconceded-user[0].saves)/SAVES*100));
      
      console.log("ESTE ES EL PASS"+PASS+" ---- "+user[0].passescompleted/totaltime*5);
      setFinavg(Math.round(doSomethingWithInput(FIN)));
      setPassavg(Math.round(doSomethingWithInput(PASS)));
      setAssistavg(Math.round(doSomethingWithInput(ASISS)));
      setInteravg(Math.round(doSomethingWithInput(INTER)));
      setPosavg(Math.round(doSomethingWithInput(POSS*0.97)));
      setAttackassistavg(Math.round(doSomethingWithInput(ATASISS)));
      setPreavg(Math.round(doSomethingWithInput(PRE)));
      setSavesavg(Math.round(doSomethingWithInput(SAVE)));
      setSavespercentavg(Math.round(doSomethingWithInput(SAVEPERCENT)));
      setConcededavg(Math.round(doSomethingWithInput(CONCEDED)));
    }

    const fetchUser2 = async () => {
      const apiCall2 = await fetch (`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=EC93B358FBCA4A90D62433C974003873&steamids=${idd}`);
      const user2 = await apiCall2.json();
      //call setName below to change the state 'name'
      //fetch utilizado para determinar el ID64 del usuario y usarlo a la hora de identificar usuarios para fotos etc
      setAvatar(user2.response.players[0].avatarfull);
      console.log(user2.response.players[0].avatarfull);
      steam.resolve('https://steamcommunity.com/id/Casana').then(id => {
        //console.log(id); // 76561198146931523
        console.log("XD 3!");
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

    const fetcht1 = async () => {
      const apiCallt1 = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID}/t1`);
      const usert1 = await apiCallt1.json();
      //call setName below to change the state 'name'
      //fetch para obtener los stats de la temporada / copa especificada
      if(usert1[0] && usert1[0].matches >= 1)
      {
      const totaltime = usert1[0].secondsplayed/60/90 > usert1[0].matches ? usert1[0].matches : usert1[0].secondsplayed/60/90;

      let PASS = Math.round(usert1[0].passescompleted/totaltime*5);
      let ASISS = Math.round(usert1[0].assists/totaltime*140);
      let TACKLE = Math.round(usert1[0].tacklescompleted/usert1[0].tackles*100*4.5);
      let POSS = Math.round(usert1[0].possession*8);
      let INTER = Math.round((usert1[0].interceptions/totaltime*2.5+usert1[0].tacklescompleted/totaltime)*2.05);
      let ATTACKASISS = (Math.round(doSomethingWithInput(ASISS)));
      let FIN = Math.round(usert1[0].goals/totaltime*70);
      let PRE = Math.round((usert1[0].shotsontarget/usert1[0].shots*100));
      let ATASISS = Math.round(doSomethingWithInput(ASISS));
      let SAVE = Math.round((usert1[0].saves/totaltime*11));
      let SAVEPERCENT = Math.round((usert1[0].savescaught/usert1[0].saves)*100);
      let SAVES = usert1[0].saves;
      if(SAVES==0){
        SAVES=1;
      }
      let CONCEDED = Math.abs(((usert1[0].goalsconceded-usert1[0].saves)/SAVES*100));
      CONCEDED = (Math.round(doSomethingWithInput(CONCEDED)));
      
      PASS = (Math.round(doSomethingWithInput(PASS)));
      ASISS = (Math.round(doSomethingWithInput(ASISS)));
      INTER = (Math.round(doSomethingWithInput(INTER)));
      POSS = (Math.round(doSomethingWithInput(POSS*0.97)));
      ATTACKASISS = (Math.round(doSomethingWithInput(ASISS)));
      FIN = (Math.round(doSomethingWithInput(FIN)));
      PRE = (Math.round(doSomethingWithInput(PRE)));
      SAVE = (Math.round(doSomethingWithInput(SAVE)));
      SAVEPERCENT = (Math.round(doSomethingWithInput(SAVEPERCENT)));

      const AFT1 = (FIN+PRE+ATTACKASISS)/3;
      const ADT1 = INTER;
      //const CCT1 = ((usert1[0].passescompleted+usert1[0].assists*10+usert1[0].possession*10)/totaltime)*2.05;
      const CCT1 = (PASS+ASISS+POSS)/3;
      const CPT1 = (SAVE+SAVEPERCENT+CONCEDED)/3;
      console.log("PORQUE MIERDA ME DA INFINITOOOO -> "+ ADT1 + " / " + AFT1 + " / " + CCT1);
      const val_deft1 = (ADT1 * 2.3 + AFT1 / 2.5 + CCT1 / 2)/3;
      const val_delt1 = ( AFT1 * 2.3 + ADT1 / 2.5 + CCT1 / 2)/3;
      const val_mcat1 = ( CCT1 + AFT1 ) / 2;
      const val_mcdt1 = ( CCT1 + ADT1 ) / 2;
      const val_gkt1 = CPT1;
      let ovrt1;
      let pos;
      if(val_deft1>=val_delt1){
        if(val_deft1>=val_mcat1){
          if(val_deft1>=val_mcdt1){
            ovrt1 = Math.trunc(val_deft1);
          }else{
            ovrt1 = Math.trunc(val_mcdt1);
          }
        }else{
          if(val_mcat1>=val_mcdt1){
            ovrt1 = Math.trunc(val_mcat1);
          }else{
            ovrt1 = Math.trunc(val_mcdt1);
          }
        }
      }else{
        if(val_delt1>=val_mcat1){
          if(val_delt1>=val_mcdt1){
            ovrt1 = Math.trunc(val_delt1);
          }else{
            ovrt1 = Math.trunc(val_mcdt1);
          }
        }else{
          if(val_mcat1>=val_mcdt1){
            ovrt1 = Math.trunc(val_mcat1);
          }else{
            ovrt1 = Math.trunc(val_mcdt1);
          }
        }
      }
      if(ovrt1<CPT1){
        ovrt1=Math.trunc(CPT1);
      }
      setT1(ovrt1);
      setT1team(usert1[0].team);
      setT1real(true);
      }else{
        setT1real(false);
      }
    }

    const fetcht2 = async () => {
      const apiCallt1 = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID}/t2`);
      const usert1 = await apiCallt1.json();
      //call setName below to change the state 'name'
      //fetch para obtener los stats de la temporada / copa especificada
      if(usert1[0] && usert1[0].matches >= 1)
      {
      const totaltime = usert1[0].secondsplayed/60/90 > usert1[0].matches ? usert1[0].matches : usert1[0].secondsplayed/60/90;

      let PASS = Math.round(usert1[0].passescompleted/totaltime*5);
      let ASISS = Math.round(usert1[0].assists/totaltime*140);
      let TACKLE = Math.round(usert1[0].tacklescompleted/usert1[0].tackles*100*4.5);
      let POSS = Math.round(usert1[0].possession*8);
      let INTER = Math.round((usert1[0].interceptions/totaltime*2.5+usert1[0].tacklescompleted/totaltime)*2.05);
      let ATTACKASISS = (Math.round(doSomethingWithInput(ASISS)));
      let FIN = Math.round(usert1[0].goals/totaltime*70);
      let PRE = Math.round((usert1[0].shotsontarget/usert1[0].shots*100));
      let ATASISS = Math.round(doSomethingWithInput(ASISS));
      let SAVE = Math.round((usert1[0].saves/totaltime*11));
      let SAVEPERCENT = Math.round((usert1[0].savescaught/usert1[0].saves)*100);
      let SAVES = usert1[0].saves;
      if(SAVES==0){
        SAVES=1;
      }
      let CONCEDED = Math.abs(((usert1[0].goalsconceded-usert1[0].saves)/SAVES*100));
      CONCEDED = (Math.round(doSomethingWithInput(CONCEDED)));
      
      PASS = (Math.round(doSomethingWithInput(PASS)));
      ASISS = (Math.round(doSomethingWithInput(ASISS)));
      INTER = (Math.round(doSomethingWithInput(INTER)));
      POSS = (Math.round(doSomethingWithInput(POSS*0.97)));
      ATTACKASISS = (Math.round(doSomethingWithInput(ASISS)));
      FIN = (Math.round(doSomethingWithInput(FIN)));
      PRE = (Math.round(doSomethingWithInput(PRE)));
      SAVE = (Math.round(doSomethingWithInput(SAVE)));
      SAVEPERCENT = (Math.round(doSomethingWithInput(SAVEPERCENT)));

      const AFT1 = (FIN+PRE+ATTACKASISS)/3;
      const ADT1 = INTER;
      //const CCT1 = ((usert1[0].passescompleted+usert1[0].assists*10+usert1[0].possession*10)/totaltime)*2.05;
      const CCT1 = (PASS+ASISS+POSS)/3;
      const CPT1 = (SAVE+SAVEPERCENT+CONCEDED)/3;
      const val_deft1 = (ADT1 * 2.3 + AFT1 / 2.5 + CCT1 / 2)/3;
      const val_delt1 = ( AFT1 * 2.3 + ADT1 / 2.5 + CCT1 / 2)/3;
      const val_mcat1 = ( CCT1 + AFT1 ) / 2;
      const val_mcdt1 = ( CCT1 + ADT1 ) / 2;
      const val_gkt1 = CPT1;
      let ovrt1;
      let pos;
      if(val_deft1>=val_delt1){
        if(val_deft1>=val_mcat1){
          if(val_deft1>=val_mcdt1){
            ovrt1 = Math.trunc(val_deft1);
          }else{
            ovrt1 = Math.trunc(val_mcdt1);
          }
        }else{
          if(val_mcat1>=val_mcdt1){
            ovrt1 = Math.trunc(val_mcat1);
          }else{
            ovrt1 = Math.trunc(val_mcdt1);
          }
        }
      }else{
        if(val_delt1>=val_mcat1){
          if(val_delt1>=val_mcdt1){
            ovrt1 = Math.trunc(val_delt1);
          }else{
            ovrt1 = Math.trunc(val_mcdt1);
          }
        }else{
          if(val_mcat1>=val_mcdt1){
            ovrt1 = Math.trunc(val_mcat1);
          }else{
            ovrt1 = Math.trunc(val_mcdt1);
          }
        }
      }
      if(ovrt1<CPT1){
        ovrt1=Math.trunc(CPT1);
      }
      setT2(ovrt1);
      setT2team(usert1[0].team);
      setT2real(true)
      }else{
        setT2real(false)
      }
    }

    const fetcht3 = async () => {
      const apiCallt1 = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID}/t3`);
      const usert1 = await apiCallt1.json();
      //call setName below to change the state 'name'
      //fetch para obtener los stats de la temporada / copa especificada
      if(usert1[0] && usert1[0].matches >= 1)
      {
        const totaltime = usert1[0].secondsplayed/60/90 > usert1[0].matches ? usert1[0].matches : usert1[0].secondsplayed/60/90;

        let PASS = Math.round(usert1[0].passescompleted/totaltime*5);
        let ASISS = Math.round(usert1[0].assists/totaltime*140);
        let TACKLE = Math.round(usert1[0].tacklescompleted/usert1[0].tackles*100*4.5);
        let POSS = Math.round(usert1[0].possession*8);
        let INTER = Math.round((usert1[0].interceptions/totaltime*2.5+usert1[0].tacklescompleted/totaltime)*2.05);
        let ATTACKASISS = (Math.round(doSomethingWithInput(ASISS)));
        let FIN = Math.round(usert1[0].goals/totaltime*70);
        let PRE = Math.round((usert1[0].shotsontarget/usert1[0].shots*100));
        const ATASISS = Math.round(doSomethingWithInput(ASISS));
        let SAVE = Math.round((usert1[0].saves/totaltime*11));
        let SAVEPERCENT = Math.round((usert1[0].savescaught/usert1[0].saves)*100);
        let SAVES = usert1[0].saves;
        if(SAVES==0){
          SAVES=1;
        }
        let CONCEDED = Math.abs(((usert1[0].goalsconceded-usert1[0].saves)/SAVES*100));
        CONCEDED = (Math.round(doSomethingWithInput(CONCEDED)));
        
        PASS = (Math.round(doSomethingWithInput(PASS)));
        ASISS = (Math.round(doSomethingWithInput(ASISS)));
        INTER = (Math.round(doSomethingWithInput(INTER)));
        POSS = (Math.round(doSomethingWithInput(POSS*0.97)));
        ATTACKASISS = (Math.round(doSomethingWithInput(ASISS)));
        FIN = (Math.round(doSomethingWithInput(FIN)));
        PRE = (Math.round(doSomethingWithInput(PRE)));
        SAVE = (Math.round(doSomethingWithInput(SAVE)));
        SAVEPERCENT = (Math.round(doSomethingWithInput(SAVEPERCENT)));
  
        const AFT1 = (FIN+PRE+ATTACKASISS)/3;
        const ADT1 = INTER;
        //const CCT1 = ((usert1[0].passescompleted+usert1[0].assists*10+usert1[0].possession*10)/totaltime)*2.05;
        const CCT1 = (PASS+ASISS+POSS)/3;
        const CPT1 = (SAVE+SAVEPERCENT+CONCEDED)/3;
        const val_deft1 = (ADT1 * 2.3 + AFT1 / 2.5 + CCT1 / 2)/3;
        const val_delt1 = ( AFT1 * 2.3 + ADT1 / 2.5 + CCT1 / 2)/3;
        const val_mcat1 = ( CCT1 + AFT1 ) / 2;
        const val_mcdt1 = ( CCT1 + ADT1 ) / 2;
        const val_gkt1 = CPT1;
        let ovrt1;
        let pos;
        if(val_deft1>=val_delt1){
          if(val_deft1>=val_mcat1){
            if(val_deft1>=val_mcdt1){
              ovrt1 = Math.trunc(val_deft1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }else{
            if(val_mcat1>=val_mcdt1){
              ovrt1 = Math.trunc(val_mcat1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }
        }else{
          if(val_delt1>=val_mcat1){
            if(val_delt1>=val_mcdt1){
              ovrt1 = Math.trunc(val_delt1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }else{
            if(val_mcat1>=val_mcdt1){
              ovrt1 = Math.trunc(val_mcat1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }
        }
        if(ovrt1<CPT1){
          ovrt1=Math.trunc(CPT1);
        }
        setT3(ovrt1);
        setT3team(usert1[0].team);
        setT3real(true)
      }else{
        setT3real(false)
      }
    }
    
    const fetcht4 = async () => {
      const apiCallt1 = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID}/t4`);
      const usert1 = await apiCallt1.json();
      //call setName below to change the state 'name'
      //fetch para obtener los stats de la temporada / copa especificada
      if(usert1[0] && usert1[0].matches >= 1)
      {
        const totaltime = usert1[0].secondsplayed/60/90 > usert1[0].matches ? usert1[0].matches : usert1[0].secondsplayed/60/90;

        let PASS = Math.round(usert1[0].passescompleted/totaltime*5);
        let ASISS = Math.round(usert1[0].assists/totaltime*140);
        let TACKLE = Math.round(usert1[0].tacklescompleted/usert1[0].tackles*100*4.5);
        let POSS = Math.round(usert1[0].possession*8);
        let INTER = Math.round((usert1[0].interceptions/totaltime*2.5+usert1[0].tacklescompleted/totaltime)*2.05);
        let ATTACKASISS = (Math.round(doSomethingWithInput(ASISS)));
        let FIN = Math.round(usert1[0].goals/totaltime*70);
        let PRE = Math.round((usert1[0].shotsontarget/usert1[0].shots*100));
        const ATASISS = Math.round(doSomethingWithInput(ASISS));
        let SAVE = Math.round((usert1[0].saves/totaltime*11));
        let SAVEPERCENT = Math.round((usert1[0].savescaught/usert1[0].saves)*100);
        let SAVES = usert1[0].saves;
        if(SAVES==0){
          SAVES=1;
        }
        let CONCEDED = Math.abs(((usert1[0].goalsconceded-usert1[0].saves)/SAVES*100));
        CONCEDED = (Math.round(doSomethingWithInput(CONCEDED)));
        
        PASS = (Math.round(doSomethingWithInput(PASS)));
        ASISS = (Math.round(doSomethingWithInput(ASISS)));
        INTER = (Math.round(doSomethingWithInput(INTER)));
        POSS = (Math.round(doSomethingWithInput(POSS*0.97)));
        ATTACKASISS = (Math.round(doSomethingWithInput(ASISS)));
        FIN = (Math.round(doSomethingWithInput(FIN)));
        PRE = (Math.round(doSomethingWithInput(PRE)));
        SAVE = (Math.round(doSomethingWithInput(SAVE)));
        SAVEPERCENT = (Math.round(doSomethingWithInput(SAVEPERCENT)));
  
        const AFT1 = (FIN+PRE+ATTACKASISS)/3;
        const ADT1 = INTER;
        //const CCT1 = ((usert1[0].passescompleted+usert1[0].assists*10+usert1[0].possession*10)/totaltime)*2.05;
        const CCT1 = (PASS+ASISS+POSS)/3;
        const CPT1 = (SAVE+SAVEPERCENT+CONCEDED)/3;
        const val_deft1 = (ADT1 * 2.3 + AFT1 / 2.5 + CCT1 / 2)/3;
        const val_delt1 = ( AFT1 * 2.3 + ADT1 / 2.5 + CCT1 / 2)/3;
        const val_mcat1 = ( CCT1 + AFT1 ) / 2;
        const val_mcdt1 = ( CCT1 + ADT1 ) / 2;
        const val_gkt1 = CPT1;
        let ovrt1;
        let pos;
        if(val_deft1>=val_delt1){
          if(val_deft1>=val_mcat1){
            if(val_deft1>=val_mcdt1){
              ovrt1 = Math.trunc(val_deft1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }else{
            if(val_mcat1>=val_mcdt1){
              ovrt1 = Math.trunc(val_mcat1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }
        }else{
          if(val_delt1>=val_mcat1){
            if(val_delt1>=val_mcdt1){
              ovrt1 = Math.trunc(val_delt1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }else{
            if(val_mcat1>=val_mcdt1){
              ovrt1 = Math.trunc(val_mcat1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }
        }
        if(ovrt1<CPT1){
          ovrt1=Math.trunc(CPT1);
        }
        setT4(ovrt1);
        setT4team(usert1[0].team);
        setActualovr(ovrt1);
        setT4real(true)
      }else{
        setT4real(false)
      }
    }

    const fetcht5 = async () => {
      const apiCallt1 = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID}/t5`);
      const usert1 = await apiCallt1.json();
      //call setName below to change the state 'name'
      //fetch para obtener los stats de la temporada / copa especificada
      if(usert1[0] && usert1[0].matches >= 1)
      {
        const totaltime = usert1[0].secondsplayed/60/90 > usert1[0].matches ? usert1[0].matches : usert1[0].secondsplayed/60/90;

        let PASS = Math.round(usert1[0].passescompleted/totaltime*5);
        let ASISS = Math.round(usert1[0].assists/totaltime*140);
        let TACKLE = Math.round(usert1[0].tacklescompleted/usert1[0].tackles*100*4.5);
        let POSS = Math.round(usert1[0].possession*8);
        let INTER = Math.round((usert1[0].interceptions/totaltime*2.5+usert1[0].tacklescompleted/totaltime)*2.05);
        let ATTACKASISS = (Math.round(doSomethingWithInput(ASISS)));
        let FIN = Math.round(usert1[0].goals/totaltime*70);
        let PRE = Math.round((usert1[0].shotsontarget/usert1[0].shots*100));
        let ATASISS = Math.round(doSomethingWithInput(ASISS));
        let SAVE = Math.round((usert1[0].saves/totaltime*11));
        let SAVEPERCENT = Math.round((usert1[0].savescaught/usert1[0].saves)*100);
        let SAVES = usert1[0].saves;
        if(SAVES==0){
          SAVES=1;
        }
        let CONCEDED = Math.abs(((usert1[0].goalsconceded-usert1[0].saves)/SAVES*100));
        CONCEDED = (Math.round(doSomethingWithInput(CONCEDED)));
        
        PASS = (Math.round(doSomethingWithInput(PASS)));
        ASISS = (Math.round(doSomethingWithInput(ASISS)));
        INTER = (Math.round(doSomethingWithInput(INTER)));
        POSS = (Math.round(doSomethingWithInput(POSS*0.97)));
        ATTACKASISS = (Math.round(doSomethingWithInput(ASISS)));
        FIN = (Math.round(doSomethingWithInput(FIN)));
        PRE = (Math.round(doSomethingWithInput(PRE)));
        SAVE = (Math.round(doSomethingWithInput(SAVE)));
        SAVEPERCENT = (Math.round(doSomethingWithInput(SAVEPERCENT)));
  
        const AFT1 = (FIN+PRE+ATTACKASISS)/3;
        const ADT1 = INTER;
        //const CCT1 = ((usert1[0].passescompleted+usert1[0].assists*10+usert1[0].possession*10)/totaltime)*2.05;
        const CCT1 = (PASS+ASISS+POSS)/3;
        const CPT1 = (SAVE+SAVEPERCENT+CONCEDED)/3;
        const val_deft1 = (ADT1 * 2.3 + AFT1 / 2.5 + CCT1 / 2)/3;
        const val_delt1 = ( AFT1 * 2.3 + ADT1 / 2.5 + CCT1 / 2)/3;
        const val_mcat1 = ( CCT1 + AFT1 ) / 2;
        const val_mcdt1 = ( CCT1 + ADT1 ) / 2;
        const val_gkt1 = CPT1;
        let ovrt1;
        let pos;
        if(val_deft1>=val_delt1){
          if(val_deft1>=val_mcat1){
            if(val_deft1>=val_mcdt1){
              ovrt1 = Math.trunc(val_deft1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }else{
            if(val_mcat1>=val_mcdt1){
              ovrt1 = Math.trunc(val_mcat1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }
        }else{
          if(val_delt1>=val_mcat1){
            if(val_delt1>=val_mcdt1){
              ovrt1 = Math.trunc(val_delt1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }else{
            if(val_mcat1>=val_mcdt1){
              ovrt1 = Math.trunc(val_mcat1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }
        }
        if(ovrt1<CPT1){
          ovrt1=Math.trunc(CPT1);
        }
        setT5(ovrt1);
        setT5team(usert1[0].team);
        setActualovr(ovrt1);
        setT5real(true)
      }else{
        setT5real(false)
      }
    }

    const fetcht0 = async () => {
      const apiCallt1 = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID}/t0`);
      const usert1 = await apiCallt1.json();
      //call setName below to change the state 'name'
      //fetch para obtener los stats de la temporada / copa especificada
      if(usert1[0] && usert1[0].matches >= 1)
      {
        const totaltime = usert1[0].secondsplayed/60/90 > usert1[0].matches ? usert1[0].matches : usert1[0].secondsplayed/60/90;

        let PASS = Math.round(usert1[0].passescompleted/totaltime*5);
        let ASISS = Math.round(usert1[0].assists/totaltime*140);
        let TACKLE = Math.round(usert1[0].tacklescompleted/usert1[0].tackles*100*4.5);
        let POSS = Math.round(usert1[0].possession*8);
        let INTER = Math.round((usert1[0].interceptions/totaltime*2.5+usert1[0].tacklescompleted/totaltime)*2.05);
        let ATTACKASISS = (Math.round(doSomethingWithInput(ASISS)));
        let FIN = Math.round(usert1[0].goals/totaltime*70);
        let PRE = Math.round((usert1[0].shotsontarget/usert1[0].shots*100));
        let ATASISS = Math.round(doSomethingWithInput(ASISS));
        let SAVE = Math.round((usert1[0].saves/totaltime*11));
        let SAVEPERCENT = Math.round((usert1[0].savescaught/usert1[0].saves)*100);
        let SAVES = usert1[0].saves;
        if(SAVES==0){
          SAVES=1;
        }
        let CONCEDED = Math.abs(((usert1[0].goalsconceded-usert1[0].saves)/SAVES*100));
        CONCEDED = (Math.round(doSomethingWithInput(CONCEDED)));
        
        PASS = (Math.round(doSomethingWithInput(PASS)));
        ASISS = (Math.round(doSomethingWithInput(ASISS)));
        INTER = (Math.round(doSomethingWithInput(INTER)));
        POSS = (Math.round(doSomethingWithInput(POSS*0.97)));
        ATTACKASISS = (Math.round(doSomethingWithInput(ASISS)));
        FIN = (Math.round(doSomethingWithInput(FIN)));
        PRE = (Math.round(doSomethingWithInput(PRE)));
        SAVE = (Math.round(doSomethingWithInput(SAVE)));
        SAVEPERCENT = (Math.round(doSomethingWithInput(SAVEPERCENT)));
  
        const AFT1 = (FIN+PRE+ATTACKASISS)/3;
        const ADT1 = INTER;
        //const CCT1 = ((usert1[0].passescompleted+usert1[0].assists*10+usert1[0].possession*10)/totaltime)*2.05;
        const CCT1 = (PASS+ASISS+POSS)/3;
        const CPT1 = (SAVE+SAVEPERCENT+CONCEDED)/3;
        const val_deft1 = (ADT1 * 2.3 + AFT1 / 2.5 + CCT1 / 2)/3;
        const val_delt1 = ( AFT1 * 2.3 + ADT1 / 2.5 + CCT1 / 2)/3;
        const val_mcat1 = ( CCT1 + AFT1 ) / 2;
        const val_mcdt1 = ( CCT1 + ADT1 ) / 2;
        const val_gkt1 = CPT1;
        let ovrt1;
        let pos;
        if(val_deft1>=val_delt1){
          if(val_deft1>=val_mcat1){
            if(val_deft1>=val_mcdt1){
              ovrt1 = Math.trunc(val_deft1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }else{
            if(val_mcat1>=val_mcdt1){
              ovrt1 = Math.trunc(val_mcat1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }
        }else{
          if(val_delt1>=val_mcat1){
            if(val_delt1>=val_mcdt1){
              ovrt1 = Math.trunc(val_delt1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }else{
            if(val_mcat1>=val_mcdt1){
              ovrt1 = Math.trunc(val_mcat1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }
        }
        if(ovrt1<CPT1){
          ovrt1=Math.trunc(CPT1);
        }
        setT0(ovrt1);
        setT0team(usert1[0].team);
        setT0real(true)
      }else{
        setT0real(false)
      }
    }

    const fetchmaradei = async () => {
      const apiCallt1 = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID}/maradei`);
      const usert1 = await apiCallt1.json();
      //call setName below to change the state 'name'
      //fetch para obtener los stats de la temporada / copa especificada
      if(usert1[0] && usert1[0].matches >= 1)
      {
        const totaltime = usert1[0].secondsplayed/60/90 > usert1[0].matches ? usert1[0].matches : usert1[0].secondsplayed/60/90;

        let PASS = Math.round(usert1[0].passescompleted/totaltime*5);
        let ASISS = Math.round(usert1[0].assists/totaltime*140);
        let TACKLE = Math.round(usert1[0].tacklescompleted/usert1[0].tackles*100*4.5);
        let POSS = Math.round(usert1[0].possession*8);
        let INTER = Math.round((usert1[0].interceptions/totaltime*2.5+usert1[0].tacklescompleted/totaltime)*2.05);
        let ATTACKASISS = (Math.round(doSomethingWithInput(ASISS)));
        let FIN = Math.round(usert1[0].goals/totaltime*70);
        let PRE = Math.round((usert1[0].shotsontarget/usert1[0].shots*100));
        let ATASISS = Math.round(doSomethingWithInput(ASISS));
        let SAVE = Math.round((usert1[0].saves/totaltime*11));
        let SAVEPERCENT = Math.round((usert1[0].savescaught/usert1[0].saves)*100);
        let SAVES = usert1[0].saves;
        if(SAVES==0){
          SAVES=1;
        }
        let CONCEDED = Math.abs(((usert1[0].goalsconceded-usert1[0].saves)/SAVES*100));
        CONCEDED = (Math.round(doSomethingWithInput(CONCEDED)));
        
        PASS = (Math.round(doSomethingWithInput(PASS)));
        ASISS = (Math.round(doSomethingWithInput(ASISS)));
        INTER = (Math.round(doSomethingWithInput(INTER)));
        POSS = (Math.round(doSomethingWithInput(POSS*0.97)));
        ATTACKASISS = (Math.round(doSomethingWithInput(ASISS)));
        FIN = (Math.round(doSomethingWithInput(FIN)));
        PRE = (Math.round(doSomethingWithInput(PRE)));
        SAVE = (Math.round(doSomethingWithInput(SAVE)));
        SAVEPERCENT = (Math.round(doSomethingWithInput(SAVEPERCENT)));
  
        const AFT1 = (FIN+PRE+ATTACKASISS)/3;
        const ADT1 = INTER;
        //const CCT1 = ((usert1[0].passescompleted+usert1[0].assists*10+usert1[0].possession*10)/totaltime)*2.05;
        const CCT1 = (PASS+ASISS+POSS)/3;
        const CPT1 = (SAVE+SAVEPERCENT+CONCEDED)/3;
        const val_deft1 = (ADT1 * 2.3 + AFT1 / 2.5 + CCT1 / 2)/3;
        const val_delt1 = ( AFT1 * 2.3 + ADT1 / 2.5 + CCT1 / 2)/3;
        const val_mcat1 = ( CCT1 + AFT1 ) / 2;
        const val_mcdt1 = ( CCT1 + ADT1 ) / 2;
        const val_gkt1 = CPT1;
        let ovrt1;
        let pos;
        if(val_deft1>=val_delt1){
          if(val_deft1>=val_mcat1){
            if(val_deft1>=val_mcdt1){
              ovrt1 = Math.trunc(val_deft1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }else{
            if(val_mcat1>=val_mcdt1){
              ovrt1 = Math.trunc(val_mcat1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }
        }else{
          if(val_delt1>=val_mcat1){
            if(val_delt1>=val_mcdt1){
              ovrt1 = Math.trunc(val_delt1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }else{
            if(val_mcat1>=val_mcdt1){
              ovrt1 = Math.trunc(val_mcat1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }
        }
        if(ovrt1<CPT1){
          ovrt1=Math.trunc(CPT1);
        }
        setMaradei(ovrt1);
        setMaradeiteam(usert1[0].team);
        setMaradeireal(true)
      }else{
        setMaradeireal(false)
      }
    }

    const fetchmaster = async () => {
      const apiCallt1 = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID}/master`);
      const usert1 = await apiCallt1.json();
      //call setName below to change the state 'name'
      //fetch para obtener los stats de la temporada / copa especificada
      if(usert1[0] && usert1[0].matches >= 1)
      {
        const totaltime = usert1[0].secondsplayed/60/90 > usert1[0].matches ? usert1[0].matches : usert1[0].secondsplayed/60/90;

        let PASS = Math.round(usert1[0].passescompleted/totaltime*5);
        let ASISS = Math.round(usert1[0].assists/totaltime*140);
        let TACKLE = Math.round(usert1[0].tacklescompleted/usert1[0].tackles*100*4.5);
        let POSS = Math.round(usert1[0].possession*8);
        let INTER = Math.round((usert1[0].interceptions/totaltime*2.5+usert1[0].tacklescompleted/totaltime)*2.05);
        let ATTACKASISS = (Math.round(doSomethingWithInput(ASISS)));
        let FIN = Math.round(usert1[0].goals/totaltime*70);
        let PRE = Math.round((usert1[0].shotsontarget/usert1[0].shots*100));
        let ATASISS = Math.round(doSomethingWithInput(ASISS));
        let SAVE = Math.round((usert1[0].saves/totaltime*11));
        let SAVEPERCENT = Math.round((usert1[0].savescaught/usert1[0].saves)*100);
        let SAVES = usert1[0].saves;
        if(SAVES==0){
          SAVES=1;
        }
        let CONCEDED = Math.abs(((usert1[0].goalsconceded-usert1[0].saves)/SAVES*100));
        CONCEDED = (Math.round(doSomethingWithInput(CONCEDED)));
        
        PASS = (Math.round(doSomethingWithInput(PASS)));
        ASISS = (Math.round(doSomethingWithInput(ASISS)));
        INTER = (Math.round(doSomethingWithInput(INTER)));
        POSS = (Math.round(doSomethingWithInput(POSS*0.97)));
        ATTACKASISS = (Math.round(doSomethingWithInput(ASISS)));
        FIN = (Math.round(doSomethingWithInput(FIN)));
        PRE = (Math.round(doSomethingWithInput(PRE)));
        SAVE = (Math.round(doSomethingWithInput(SAVE)));
        SAVEPERCENT = (Math.round(doSomethingWithInput(SAVEPERCENT)));
  
        const AFT1 = (FIN+PRE+ATTACKASISS)/3;
        const ADT1 = INTER;
        //const CCT1 = ((usert1[0].passescompleted+usert1[0].assists*10+usert1[0].possession*10)/totaltime)*2.05;
        const CCT1 = (PASS+ASISS+POSS)/3;
        const CPT1 = (SAVE+SAVEPERCENT+CONCEDED)/3;
        const val_deft1 = (ADT1 * 2.3 + AFT1 / 2.5 + CCT1 / 2)/3;
        const val_delt1 = ( AFT1 * 2.3 + ADT1 / 2.5 + CCT1 / 2)/3;
        const val_mcat1 = ( CCT1 + AFT1 ) / 2;
        const val_mcdt1 = ( CCT1 + ADT1 ) / 2;
        const val_gkt1 = CPT1;
        let ovrt1;
        let pos;
        if(val_deft1>=val_delt1){
          if(val_deft1>=val_mcat1){
            if(val_deft1>=val_mcdt1){
              ovrt1 = Math.trunc(val_deft1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }else{
            if(val_mcat1>=val_mcdt1){
              ovrt1 = Math.trunc(val_mcat1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }
        }else{
          if(val_delt1>=val_mcat1){
            if(val_delt1>=val_mcdt1){
              ovrt1 = Math.trunc(val_delt1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }else{
            if(val_mcat1>=val_mcdt1){
              ovrt1 = Math.trunc(val_mcat1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }
        }
        if(ovrt1<CPT1){
          ovrt1=Math.trunc(CPT1);
        }
        setMaster(ovrt1);
        setMasterteam(usert1[0].team);
        setMasterreal(true)
      }else{
        setMasterreal(false)
      }
    }
    
    const fetchamerica = async () => {
      const apiCallt1 = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID}/copaamerica`);
      const usert1 = await apiCallt1.json();
      //call setName below to change the state 'name'
      //fetch para obtener los stats de la temporada / copa especificada
      if(usert1[0] && usert1[0].matches > 3)
      {
        const totaltime = usert1[0].secondsplayed/60/90 > usert1[0].matches ? usert1[0].matches : usert1[0].secondsplayed/60/90;

        let PASS = Math.round(usert1[0].passescompleted/totaltime*5);
        let ASISS = Math.round(usert1[0].assists/totaltime*140);
        let TACKLE = Math.round(usert1[0].tacklescompleted/usert1[0].tackles*100*4.5);
        let POSS = Math.round(usert1[0].possession*8);
        let INTER = Math.round((usert1[0].interceptions/totaltime*2.5+usert1[0].tacklescompleted/totaltime)*2.05);
        let ATTACKASISS = (Math.round(doSomethingWithInput(ASISS)));
        let FIN = Math.round(usert1[0].goals/totaltime*70);
        let PRE = Math.round((usert1[0].shotsontarget/usert1[0].shots*100));
        let ATASISS = Math.round(doSomethingWithInput(ASISS));
        let SAVE = Math.round((usert1[0].saves/totaltime*11));
        let SAVEPERCENT = Math.round((usert1[0].savescaught/usert1[0].saves)*100);
        let SAVES = usert1[0].saves;
        if(SAVES==0){
          SAVES=1;
        }
        let CONCEDED = Math.abs(((usert1[0].goalsconceded-usert1[0].saves)/SAVES*100));
        CONCEDED = (Math.round(doSomethingWithInput(CONCEDED)));
        
        PASS = (Math.round(doSomethingWithInput(PASS)));
        ASISS = (Math.round(doSomethingWithInput(ASISS)));
        INTER = (Math.round(doSomethingWithInput(INTER)));
        POSS = (Math.round(doSomethingWithInput(POSS*0.97)));
        ATTACKASISS = (Math.round(doSomethingWithInput(ASISS)));
        FIN = (Math.round(doSomethingWithInput(FIN)));
        PRE = (Math.round(doSomethingWithInput(PRE)));
        SAVE = (Math.round(doSomethingWithInput(SAVE)));
        SAVEPERCENT = (Math.round(doSomethingWithInput(SAVEPERCENT)));
  
        const AFT1 = (FIN+PRE+ATTACKASISS)/3;
        const ADT1 = INTER;
        //const CCT1 = ((usert1[0].passescompleted+usert1[0].assists*10+usert1[0].possession*10)/totaltime)*2.05;
        const CCT1 = (PASS+ASISS+POSS)/3;
        const CPT1 = (SAVE+SAVEPERCENT+CONCEDED)/3;
        const val_deft1 = (ADT1 * 2.3 + AFT1 / 2.5 + CCT1 / 2)/3;
        const val_delt1 = ( AFT1 * 2.3 + ADT1 / 2.5 + CCT1 / 2)/3;
        const val_mcat1 = ( CCT1 + AFT1 ) / 2;
        const val_mcdt1 = ( CCT1 + ADT1 ) / 2;
        const val_gkt1 = CPT1;
        let ovrt1;
        let pos;
        if(val_deft1>=val_delt1){
          if(val_deft1>=val_mcat1){
            if(val_deft1>=val_mcdt1){
              ovrt1 = Math.trunc(val_deft1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }else{
            if(val_mcat1>=val_mcdt1){
              ovrt1 = Math.trunc(val_mcat1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }
        }else{
          if(val_delt1>=val_mcat1){
            if(val_delt1>=val_mcdt1){
              ovrt1 = Math.trunc(val_delt1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }else{
            if(val_mcat1>=val_mcdt1){
              ovrt1 = Math.trunc(val_mcat1);
            }else{
              ovrt1 = Math.trunc(val_mcdt1);
            }
          }
        }
        if(ovrt1<CPT1){
          ovrt1=Math.trunc(CPT1);
        }
        setAmerica(ovrt1);
        setAmericateam(usert1[0].team);
        setAmericareal(true);
      }else{
        setAmericareal(false);
      }
    }

    useEffect(() => {
      fetchUser();
      fetchUser2();
      fetcht1();
      fetcht2();
      fetcht3();
      fetcht4();
      fetcht5();
      fetcht0();
      fetchmaradei();
      fetchmaster();
      fetchamerica();
    }, [playerID])
    
    useEffect(() => {
      fetchUser();
      fetchUser2();
      fetcht1();
      fetcht2();
      fetcht3();
      fetcht4();
      fetcht5();
      fetcht0();
      fetchmaradei();
      fetchmaster();
      fetchamerica();
    }, [tID])

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

    //<div class="stats-col-2">
    //{passescompleted}
    //<span class="player-card-stats-name"> SHT</span>
    //<br></br>
    //{passes}
    //<span class="player-card-stats-name"> STR</span>
    //<br></br>
    //{interceptions}
    //<span class="player-card-stats-name"> DEF</span>
    //</div>

    //<select
    //value={tID}
    //onChange={r => setTID(String(r.target.value))}
    //>
    //{torneos.torneos.map(torneo => (
    //  <option key={torneo.name} value={torneo.name}>
    //    {torneo.name}
    //  </option>
    //))}
   // </select>

   //{{backgroundImage: require(`../images/banners/${team.toString().toLowerCase()}.png`)}} backgroundSize: '50%'
   //`url(` + require(`../images/banners/${team.toString().toLowerCase()}.png`) + `)`
    // declaramos un contador y un ovrtotal para poner los promedios del overall
   
   
   
    /* <div className="stats-col-1">
                  {Math.trunc(AF)}
                  <span className="player-card-stats-name"> AP</span>
                  <br></br>
                  {Math.trunc(AD)}
                  <span className="player-card-stats-name"> AD</span>
                  <br></br>
                  {Math.trunc(CC)}
                  <span className="player-card-stats-name"> CC</span>
                </div>
                <div className="stats-col-2">
                  {Math.trunc(CP)}
                  <span className="player-card-stats-name"> CP</span>
                  <br></br>
                </div>
                <div className="stats-col-bg"></div>
              </div>
              <tr>
                          <td className="stat_tier_3 stat" style={{backgroundColor: tacklescompleted >= 15 ? '#02fec5': tacklescompleted >= 10 && tacklescompleted < 15 ? '#a8fe02' : tacklescompleted >= 5 && tacklescompleted < 10 ? '#fbb206' : 'red' }}>{Math.trunc(tacklescompleted)}</td>
                          <td>Entradas completadas</td>
              </tr>
              */

    return(
      <div>
        <div className="content-container">
          <div className="fw-container bg-dark"  style={{ backgroundImage: `url(` + require(`../images/banners/${theteam}.png`) + `)` , backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className="container-large flex top-container">
              <div className="player-card player-card-shadow player-card-large bg-image2" style={{ backgroundImage: ovrtotal >= 90 ? `url(` + require(`../images/bg/0.png`) + `)`: ovrtotal >= 80 && ovrtotal < 90 ? `url(` + require(`../images/bg/03.png`) + `)` : ovrtotal >= 70 && ovrtotal < 80 ? `url(` + require(`../images/bg/05.png`) + `)` : `url(` + require(`../images/bg/05.png`) + `)`}}>
                <div className="player-card-position">{pos}</div>
                <div className="player-card-ovr">{ovrtotal}</div>
                <div className="player-card-name">{name}</div>
                <img className="player-card-club-featured" src={require(`../images/clubs/${team.toString().toLowerCase()}.png`)}></img>
                <img className="player-card-image-featured" src={require(`../images/cartas/${id}.png`)}></img>
              </div>
              <div className="top-info">
                <h1 className="top-header">
                  <span className="ovr stat_tier_3" style={{backgroundColor: ovrtotal >= 90 ? '#02fec5': ovrtotal >= 80 && ovrtotal < 90 ? '#a8fe02' : ovrtotal >= 70 && ovrtotal < 80 ? '#fbb206' : 'red' }}>{ovrtotal}</span>
                  <span>&nbsp;</span>{name}
                </h1>
                <h2 className="subtle-text">{name} IOSoccer {temporada} Stats</h2>
                <p className="description subtle-text">{name} es un futbolista con una media de {ovrtotal} en la posicion de {pos}. {name} es un jugador perteneciente al equipo {team} de IOSoccer.</p>
                <div>
                  <ul className="versions-list">
                    <div>
                      {t0real ? <button className="abutton" onClick={r => setTID(String("t0"))}>
                      <li className="versions-list-el">
                      <span className="stat stat_tier_2" style={{backgroundColor: t0 >= 90 ? '#02fec5': t0 >= 80 && t0 < 90 ? '#a8fe02' : t0 >= 70 && t0 < 80 ? '#fbb206' : 'red' }}>
                      {t0}</span>
                      <img className="club-flag versions-list-flag" src={require(`../images/clubs/${t0team.toString().toLowerCase()}.png`)} title={t0team} />
                      <span className="game">
                      Temporada 0</span>
                      </li>
                      </button> : null}
                    </div>
                    <div>
                    {t1real ? <button className="abutton" onClick={r => setTID(String("t1")) && setActualovr(t1)}>
                      <li className="versions-list-el">
                      <span className="stat stat_tier_2" style={{backgroundColor: t1 >= 90 ? '#02fec5': t1 >= 80 && t1 < 90 ? '#a8fe02' : t1 >= 70 && t1 < 80 ? '#fbb206' : 'red' }}>
                      {t1}</span>
                      <img className="club-flag versions-list-flag" src={require(`../images/clubs/${t1team.toString().toLowerCase()}.png`)} title={t1team} />
                      <span className="game">
                      Temporada 1</span>
                      </li>
                      </button> : null}
                    </div>
                    <div>
                      {t2real ? <button className="abutton" onClick={r => setTID(String("t2")) && setActualovr(t2)}>
                      <li className="versions-list-el">
                      <span className="stat stat_tier_2" style={{backgroundColor: t2 >= 90 ? '#02fec5': t2 >= 80 && t2 < 90 ? '#a8fe02' : t2 >= 70 && t2 < 80 ? '#fbb206' : 'red' }}>
                      {t2}</span>
                      <img className="club-flag versions-list-flag" src={require(`../images/clubs/${t2team.toString().toLowerCase()}.png`)} title={t2team} />
                      <span className="game">
                      Temporada 2</span>
                      </li>
                      </button> : null}
                    </div>
                    <div>
                      {t3real ? <button className="abutton" onClick={r => setTID(String("t3")) && setActualovr(t3)}>
                      <li className="versions-list-el">
                      <span className="stat stat_tier_2" style={{backgroundColor: t3 >= 90 ? '#02fec5': t3 >= 80 && t3 < 90 ? '#a8fe02' : t3 >= 70 && t3 < 80 ? '#fbb206' : 'red' }}>
                      {t3}</span>
                      <img className="club-flag versions-list-flag" src={require(`../images/clubs/${t3team.toString().toLowerCase()}.png`)} title={t3team} />
                      <span className="game">
                      Temporada 3</span>
                      </li>
                      </button> : null}
                    </div>
                    <div>
                      {t4real ? <button className="abutton" onClick={r => setTID(String("t4")) && setActualovr(t4)}> <li className="versions-list-el"> <span className="stat stat_tier_2" style={{backgroundColor: t4 >= 90 ? '#02fec5': t4 >= 80 && t4 < 90 ? '#a8fe02' : t4 >= 70 && t4 < 80 ? '#fbb206' : 'red' }}>
                      {t4}</span>
                      <img className="club-flag versions-list-flag" src={require(`../images/clubs/${t4team.toString().toLowerCase()}.png`)} title={t4team} />
                      <span className="game">
                      Temporada 4</span> </li> </button>: null}
                    </div>
                    <div>
                    {t5real ? <button className="abutton" onClick={r => setTID(String("t5")) && setActualovr(t5)}>
                      <li className="versions-list-el">
                      <span className="stat stat_tier_2" style={{backgroundColor: t5 >= 90 ? '#02fec5': t5 >= 80 && t5 < 90 ? '#a8fe02' : t5 >= 70 && t5 < 80 ? '#fbb206' : 'red' }}>
                      {t5}</span>
                      <img className="club-flag versions-list-flag" src={require(`../images/clubs/${t5team.toString().toLowerCase()}.png`)} title={t5team} />
                      <span className="game">
                      Temporada 5</span>
                      </li>
                      </button> : null}
                    </div>
                    <div></div>
                    <div>
                      {maradeireal ? <button className="abutton" onClick={r => setTID(String("maradei"))}>
                      <li className="versions-list-el">
                      <span className="stat stat_tier_2" style={{backgroundColor: maradei >= 90 ? '#02fec5': maradei >= 80 && maradei < 90 ? '#a8fe02' : maradei >= 70 && maradei < 80 ? '#fbb206' : 'red' }}>
                      {maradei}</span>
                      <img className="club-flag versions-list-flag" src={require(`../images/clubs/${maradeiteam.toString().toLowerCase()}.png`)} title={maradeiteam} />
                      <span className="game">
                      Copa Maradei</span>
                      </li>
                      </button> : null}
                    </div>
                    <div>
                      {masterreal ? <button className="abutton" onClick={r => setTID(String("master"))}>
                      <li className="versions-list-el">
                      <span className="stat stat_tier_2" style={{backgroundColor: master >= 90 ? '#02fec5': master >= 80 && master < 90 ? '#a8fe02' : master >= 70 && master < 80 ? '#fbb206' : 'red' }}>
                      {master}</span>
                      <img className="club-flag versions-list-flag" src={require(`../images/clubs/${masterteam.toString().toLowerCase()}.png`)} title={masterteam} />
                      <span className="game">
                      Copa Master</span>
                      </li>
                      </button> : null}
                    </div>
                    <div>
                      {americareal ? <button className="abutton" onClick={r => setTID(String("copaamerica"))}>
                      <li className="versions-list-el">
                      <span className="stat stat_tier_2" style={{backgroundColor: america >= 90 ? '#02fec5': america >= 80 && america < 90 ? '#a8fe02' : america >= 70 && america < 80 ? '#fbb206' : 'red' }}>
                      {america}</span>
                      <img className="club-flag versions-list-flag" src={require(`../images/clubs/${americateam.toString().toLowerCase()}.png`)} title={americateam} />
                      <span className="game">
                      Copa America</span>
                      </li>
                      </button> : null}
                    </div>
                  <li className="versions-list-el">
                  <button className="abutton" onClick={r => setTID(String("all"))}>
                  <span className="game">Mostrar todo</span>
                  </button>
                  </li>
                  </ul>
                  <div>
                    <select className="custom-select"
                    value={playerID}
                    onChange={e => { setTID(String("all")) ; setPlayerID(String(e.target.value)); } }
                    >
                    {players.players.map(player => (
                      <option key={player.steam} value={player.steam}>
                        {player.name}
                      </option>
                    ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-stats-cards-container container-large flex flex-expand">
            <div className="player-main-column player-info-column">
              <div className="hexagon-positions-container">
                <div className="hexagon-container">
                <RadarChart
                  captions={{
                  // columns
                    battery: 'AP',
                    design: 'AD',
                    poderio: 'CP',
                    useful: 'CC',
                    
                  }}
                  data={[
                  // data
                    {
                      data: {
                        battery: AF/100,
                        design: AD/100,
                        useful: CC/100,
                        poderio: CP/100,
                      },
                      meta: { color: '#58FCEC' }
                    },
                  ]}
                  size={200}
                />
                </div>
                <div className="player-positions-new">
                  <div className="player-positions-row">
                    <div className="player-positions-item fw-2" style={{backgroundColor: val_del >= 85 ? '#ef1e1e': val_del >= 75 && val_del < 85 ? '#f09090' : 'white' }}> 
                      <span className="pos">CF</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(val_del)}</span>
                    </div>
                  </div>
                  <div className="player-positions-row">
                    <div className="player-positions-item" style={{backgroundColor: val_mca >= 85 ? '#88c900': val_mca >= 75 && val_mca < 85 ? '#b6c98d' : 'white' }}> 
                      <span className="pos">MCA</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(val_mca)}</span>
                    </div>
                    <div className="player-positions-item" style={{backgroundColor: val_mcd >= 85 ? '#88c900': val_mcd >= 75 && val_mcd < 85 ? '#b6c98d' : 'white' }}> 
                      <span className="pos">MCD</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(val_mcd)}</span>
                    </div>
                  </div>
                  <div className="player-positions-row">
                    <div className="player-positions-item fw-2" style={{backgroundColor: val_def >= 85 ? '#00abd2': val_def >= 75 && val_def < 85 ? '#92c6d1' : 'white' }}> 
                      <span className="pos">CB</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(val_def)}</span>
                    </div>
                  </div>
                  <div className="player-positions-row">
                    <div className="player-positions-item fw-2" style={{backgroundColor: val_gk >= 85 ? '#feb907': val_gk >= 75 && val_gk < 85 ? '#fed97b' : 'white' }}> 
                      <span className="pos">GK</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(val_gk)}</span>
                    </div>
                  </div>
                </div>
              </div>
              <table className="player-info">
                <tbody>
                  <tr>
                    <td>Nombre</td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <td>SteamID</td>
                    <td>{id}</td>
                  </tr>
                  <tr>
                    <td>Equipo</td>
                    <td>{team}</td>
                  </tr>
                  <tr>
                    <td>Partidos</td>
                    <td>{matches}</td>
                  </tr>
                  <tr>
                    <td>Partidos Reales</td>
                    <td>{Math.round(totaltime)}</td>
                  </tr>
                  <tr>
                    <td>Posicion</td>
                    <td>{pos}</td>
                  </tr>
                  <tr>
                    <td>Goles</td>
                    <td>{goals}</td>
                  </tr>
                  <tr>
                    <td>Asistencias</td>
                    <td>{assists}</td>
                  </tr>
                  <tr>
                    <td>Pases</td>
                    <td>{passes}</td>
                  </tr>
                  <tr>
                    <td>Intercepciones</td>
                    <td>{interceptions}</td>
                  </tr>
                  <tr>
                    <td>Atajadas</td>
                    <td>{saves}</td>
                  </tr>
                  <tr>
                    <td>Posesion</td>
                    <td>{Math.round(possession)}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-column" style={{flexGrow: 2}}>
              <div className="stats-container">
                <h3>Habilidad</h3>
                <div className="flex flex-wrap stats-block-container">
                  <div className="stats-block">
                    <h4>
                      <span className="stat_tier_2 stat" style={{backgroundColor: AF >= 90 ? '#02fec5': AF >= 80 && AF < 90 ? '#a8fe02' : AF >= 70 && AF < 80 ? '#fbb206' : 'red' }}>{Math.round(AF)}</span>
                      Poder Ofensivo
                    </h4>
                    <div className="star-bar" style={{background: '#e6e6e6', height: '8px', position: 'relative', borderRadius: '5px', marginBottom: '15px', width: '400px'}}>
                      <div className="stat_tier_2 stat-bar-div" style={{backgroundColor: AF >= 90 ? '#02fec5': AF >= 80 && AF < 90 ? '#a8fe02' : AF >= 70 && AF < 80 ? '#fbb206' : 'red', width: `${AF}%`}}></div>
                    </div>
                    <table className="player-stats-modern">
                      <tbody>
                        <tr>
                <td className="stat_tier_3 stat" style={{backgroundColor: finavg >= 90 ? '#02fec5': finavg >= 80 && finavg < 90 ? '#a8fe02' : finavg >= 70 && finavg < 80 ? '#fbb206' : 'red' }}>{finavg}</td>
                          <td>Finalizacion</td>
                        </tr>
                        <tr>
                          <td className="stat_tier_3 stat" style={{backgroundColor: preavg >= 80 ? '#02fec5': preavg >= 60 && preavg < 80 ? '#a8fe02' : preavg >= 40 && preavg < 60 ? '#fbb206' : 'red' }}>{preavg}</td>
                          <td>Precision</td>
                        </tr>
                        <tr>
                          <td className="stat_tier_3 stat" style={{backgroundColor: attackassistavg >= 90 ? '#02fec5': attackassistavg >= 80 && attackassistavg < 90 ? '#a8fe02' : attackassistavg >= 70 && attackassistavg < 80 ? '#fbb206' : 'red' }}>{attackassistavg}</td>
                          <td>Asistidor</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="stats-block">
                    <h4>
                      <span className="stat_tier_2 stat" style={{backgroundColor: AD >= 90 ? '#02fec5': AD >= 80 && AD < 90 ? '#a8fe02' : AD >= 70 && AD < 80 ? '#fbb206' : 'red' }}>{Math.trunc(AD)}</span>
                      Aptitud Defensiva
                    </h4>
                    <div className="star-bar" style={{background: '#e6e6e6', height: '8px', position: 'relative', borderRadius: '5px', marginBottom: '15px', width: '400px'}}>
                      <div className="stat_tier_2 stat-bar-div" style={{backgroundColor: AD >= 90 ? '#02fec5': AD >= 80 && AF < 90 ? '#a8fe02' : AD >= 70 && AD < 80 ? '#fbb206' : 'red', width: `${AD}%`}}></div>
                    </div>
                    <table className="player-stats-modern">
                      <tbody>
                        <tr>
                          <td className="stat_tier_3 stat" style={{backgroundColor: interavg >= 90 ? '#02fec5': interavg >= 80 && interavg < 90 ? '#a8fe02' : interavg >= 70 && interavg < 80 ? '#fbb206' : 'red' }}>{interavg}</td>
                          <td>Recuperacion de Pelota</td>
                        </tr>
                        <tr>
                          <td className="stat_tier_3 stat" style={{backgroundColor: tacklescompleted/tackles*100 >= 25 ? '#02fec5': tacklescompleted/tackles*100 >= 20 && tacklescompleted/tackles*100 < 25 ? '#a8fe02' : tacklescompleted/tackles*100 >= 15 && tacklescompleted/tackles*100 < 20 ? '#fbb206' : 'red' }}>{Math.trunc(tacklescompleted/tackles*100)}%</td>
                          <td>Efectividad de Entradas</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="stats-block">
                    <h4>
                      <span className="stat_tier_2 stat" style={{backgroundColor: CC >= 90 ? '#02fec5': CC >= 80 && CC < 90 ? '#a8fe02' : CC >= 70 && CC < 80 ? '#fbb206' : 'red' }}>{Math.round(CC)}</span>
                      Capacidad Creativa
                    </h4>
                    <div className="star-bar" style={{background: '#e6e6e6', height: '8px', position: 'relative', borderRadius: '5px', marginBottom: '15px', width: '400px'}}>
                      <div className="stat_tier_2 stat-bar-div" style={{backgroundColor: CC >= 90 ? '#02fec5': CC >= 80 && CC < 90 ? '#a8fe02' : CC >= 70 && CC < 80 ? '#fbb206' : 'red', width: `${CC}%`}}></div>
                    </div>
                    <table className="player-stats-modern">
                      <tbody>
                        <tr>
                          <td className="stat_tier_3 stat" style={{backgroundColor: passavg >= 90 ? '#02fec5': passavg >= 80 && passavg < 90 ? '#a8fe02' : passavg >= 70 && passavg < 80 ? '#fbb206' : 'red' }}>{passavg}</td>
                          <td>Pasador
                          </td>
                        </tr>
                        <tr>
                          <td className="stat_tier_3 stat" style={{backgroundColor: assistavg >= 90 ? '#02fec5': assistavg >= 80 && assistavg < 90 ? '#a8fe02' : assistavg >= 70 && assistavg < 80 ? '#fbb206' : 'red' }}>{assistavg}</td>
                          <td>Asistidor</td>
                        </tr>
                        <tr>
                          <td className="stat_tier_3 stat" style={{backgroundColor: posavg >= 90 ? '#02fec5': posavg >= 80 && posavg < 90 ? '#a8fe02' : posavg >= 70 && posavg < 80 ? '#fbb206' : 'red'}}>{posavg}</td>
                          <td>Posesion</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="stats-block">
                    <h4>
                      <span className="stat_tier_2 stat" style={{backgroundColor: CP >= 90 ? '#02fec5': CP >= 80 && CP < 90 ? '#a8fe02' : CP >= 70 && CP < 80 ? '#fbb206' : 'red' }}>{Math.trunc(CP)}</span>
                      Capacidad Portero
                    </h4>
                    <div className="star-bar" style={{background: '#e6e6e6', height: '8px', position: 'relative', borderRadius: '5px', marginBottom: '15px', width: '400px'}}>
                      <div className="stat_tier_2 stat-bar-div" style={{backgroundColor: CP >= 90 ? '#02fec5': CP >= 80 && CP < 90 ? '#a8fe02' : CP >= 70 && AF < 80 ? '#fbb206' : 'red', width: `${CP}%`}}></div>
                    </div>
                    <table className="player-stats-modern">
                      <tbody>
                        <tr>
                          <td className="stat_tier_3 stat" style={{backgroundColor: savesavg >= 90 ? '#02fec5': savesavg >= 80 && savesavg < 90 ? '#a8fe02' : savesavg >= 70 && savesavg < 80 ? '#fbb206' : 'red' }}>{savesavg}</td>
                          <td>Atrapada</td>
                        </tr>
                        <tr>
                          <td className="stat_tier_3 stat" style={{backgroundColor: savespercentavg >= 90 ? '#02fec5': savespercentavg >= 80 && savespercentavg < 90 ? '#a8fe02' : savespercentavg >= 70 && savespercentavg < 80 ? '#fbb206' : 'red' }}>{savespercentavg}</td>
                          <td>Efectividad de atrapada</td>
                        </tr>
                        <tr>
                          <td className="stat_tier_3 stat" style={{backgroundColor: concededavg >= 90 ? '#02fec5': concededavg >= 80 && concededavg < 90 ? '#a8fe02' : concededavg >= 70 && concededavg < 80 ? '#fbb206' : 'red' }}>{concededavg}</td>
                          <td>Seguridad</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
        <>
        
        </>
        
      </div>
        
    </div>
    )

}

export default Card
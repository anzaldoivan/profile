import React, {useState, useEffect} from 'react'

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import '../App.css';

import axios from 'axios';

function Stats(){

    const [name, setName] = useState(0);
    const [steamID, setSteamID] = useState(0);
    const [goals, setGoals] = useState(0);
    const [assists, setAssists] = useState(0);
    const [shots, setShots] = useState(0);
    const [shotsontarget, setShotsontarget] = useState(0);
    const [passes, setPasses] = useState(0);
    const [passescompleted, setPassescompleted] = useState(0);
    const [interceptions, setInterceptions] = useState(0);
    const [fouls, setFouls] = useState(0);
    const [offsides, setOffsides] = useState(0);
    const [tackles, setTackles] = useState(0);

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

    useEffect(() => {
        axios.get("https://stats.iosoccer-sa.bid/api/everything")
          .then(res => {
            console.log(res.data[0]. teams[1]. playerStatistics[0].info.name)
            setName(res.data[0]. teams[1]. playerStatistics[0].info.name)
            setGoals(res.data[0]. teams[1]. playerStatistics[0].statistics.goals)
            setAssists(res.data[0]. teams[1]. playerStatistics[0].statistics.assists)
            setShots(res.data[0]. teams[1]. playerStatistics[0].statistics.shots)
            setShotsontarget(res.data[0]. teams[1]. playerStatistics[0].statistics.shotsontarget)
            setPasses(res.data[0]. teams[1]. playerStatistics[0].statistics.passes)
            setPassescompleted(res.data[0]. teams[1]. playerStatistics[0].statistics.passescompleted)
            setInterceptions(res.data[0]. teams[1]. playerStatistics[0].statistics.interceptions)
            setFouls(res.data[0]. teams[1]. playerStatistics[0].statistics.fouls)
            setOffsides(res.data[0]. teams[1]. playerStatistics[0].statistics.offsides)
            setTackles(res.data[0]. teams[1]. playerStatistics[0].statistics.tackles)
          })
          .catch(err => {
            console.log(err)
          })
      })

    return(
      <div>
        <div className="stats">
        <div>{name}</div>
        <div>Goals: {goals}</div>
        <div>Assists: {assists}</div>
        <div>Shots: {shots} ({shotsontarget})</div>
        <div>Passes: {passes} ({passescompleted})</div>
        <div>Interceptions: {interceptions}</div>
        <div>Fouls: {fouls}</div>
        <div>Offsides: {offsides}</div>
        <div>Tackles: {tackles}</div>
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
              battery: ((goals*35+assists*25)/100),
              design: .44,
              useful: 0.96,
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
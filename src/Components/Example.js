import React, {useState, useEffect} from 'react'

export default function Example(jugador, temporada) { 
    const [data, dataSet] = useState(false);

    async function fetchMyAPI(req, res) {
      let response = await fetch(`https://stats.iosoccer-sa.bid/api/player/${jugador}/${temporada}`)
      response = await res.json()
      console.log(response[0]);
      dataSet(response[0]) 
    }

    useEffect(() => {
      fetchMyAPI();
    }, []);

  return <div>{data}</div>
};
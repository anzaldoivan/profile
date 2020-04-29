import React, { useState } from 'react';

function Select(){
    const players = require("./players.json");
    const [playerID, setPlayerID] = useState("STEAM_0:0:41134189");
    
    return (
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
      );
}

export default Select
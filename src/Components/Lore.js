import React, {useState, useEffect} from 'react'

function Lore(){
    const players = require("./players.json");
    const [playerID, setPlayerID] = useState("STEAM_0:0:41134189");
    
    return (
        <div>
            <p>{playerID}</p>
        </div>
    )
}

export default Lore
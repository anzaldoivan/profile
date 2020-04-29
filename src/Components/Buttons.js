import React, {useState} from 'react'
import '../App.css'

function handleClick() {
    console.log("I was clicked");
}

function Buttons(){
    const [bool, setBool] = useState(0);
    return(
        <div>
            <div className="button1">
            <h1><a className="button">Base de Datos Jugadores</a></h1>
            <button onClick={() => setBool(bool + 1)}>click me</button>
            </div>
            <div className="button2">
            <h1>Administracion de Equipo</h1>
            </div>
            <div className="button3">
            <h1>IOS Manager Proximamente</h1>
            </div>
        </div>
    )
}

export default Buttons
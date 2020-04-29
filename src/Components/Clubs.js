import React from 'react'
import '../App.css'

function Clubs(){

    return(
        <div className="nav3">
            <p><a href="http://localhost:3000/JF" className="icons"><img src={require("../images/clubs/jf.png")} alt="" width="120" height="120"/></a></p>
            <p><a href="http://localhost:3000/JF" className="icons"><img src={require("../images/clubs/mg.png")} alt="" width="120" height="120"/></a></p>
            <p><a href="http://localhost:3000/JF" className="icons"><img src={require("../images/clubs/cadd.png")} alt="" width="120" height="120"/></a></p>
            <p><a href="http://localhost:3000/JF" className="icons"><img src={require("../images/clubs/pufc.png")} alt="" width="120" height="120"/></a></p>
            <p><a href="http://localhost:3000/JF" className="icons"><img src={require("../images/clubs/lcb.png")} alt="" width="120" height="120"/></a></p>
            <p><a href="http://localhost:3000/JF" className="icons"><img src={require("../images/clubs/safc.png")} alt="" width="120" height="120"/></a></p>
            <p><a href="http://localhost:3000/JF" className="icons"><img src={require("../images/clubs/mfc.png")} alt="" width="120" height="120"/></a></p>
        </div>
    )

}

export default Clubs
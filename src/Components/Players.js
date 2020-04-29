import React from 'react'

function Players(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Goles: {props.goals}</p>
            <p>Pases: {props.passes}</p>
        </div>
    )
}

export default Players
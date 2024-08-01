import React from 'react'
import { useState } from 'react'

const Player = ({initialName, symbol, isActive}) => {
    const [isEditing, setisEditing] = useState(false)
    const [name, setName] = useState(initialName)

  const handleEditing = ()=>{
    setisEditing((editing)=> !editing)
  }

  let playerName = <span className="player-name">{name}</span>
  if(isEditing){
    playerName=<input type="text" value={name} onChange={(e)=> setName(e.target.value)} required/>
  }
  return (
    <li className={isActive ? "active" :"" }>
    <span className="player">
      { playerName}
      <span className="player-symbol">{symbol}</span>              
    </span>
    <button onClick={handleEditing}>{isEditing? "Save":"Edit"}</button>
  </li>
  )
}

export default Player
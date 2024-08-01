import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import GameOver from "./components/GameOver"
import deriveWinner from "./helpers/deriveWinner"
import deriveCurrentPlayer from "./helpers/deriveCurrentPlayer"
import deriveGameBoard from "./helpers/deriveGameBoard"


function App() {

  const [gameTurns, setGameTurns] = useState([])
  
  let activePlayer = deriveCurrentPlayer(gameTurns)

  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard)
  const hasDraw = gameTurns.length === 9 && !winner


  const handleSelectedPlayer= (rowIndex, colIndex)=>{
    setGameTurns(prevTurns => {
      let currentPlayer = deriveCurrentPlayer(prevTurns)
      const updatedTurns = [{square:{row:rowIndex, col: colIndex}, player:currentPlayer},...prevTurns]
      return updatedTurns
    })
  }

  const handleRestart = ()=>{
    setGameTurns([])
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={"player 1"} symbol={"X"} isActive={activePlayer === "X"}/>
          <Player initialName={"player 2"} symbol={"O"} isActive={activePlayer === "O"}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} handleRestart={handleRestart}/> }

       <GameBoard onSelectSquare={handleSelectedPlayer} gameBoard={gameBoard} />
      </div>

      <Log turns={gameTurns}/>
    </main>
  )
}

export default App

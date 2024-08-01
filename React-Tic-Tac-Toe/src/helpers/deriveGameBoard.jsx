
const INITIAL_GAME_BOARD = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]
  
  const deriveGameBoard = (gameTurns)=>{
    
    let gameBoard = [...INITIAL_GAME_BOARD.map(innerArray=> [...innerArray])]
  
    for(const turn of gameTurns){
       const {square, player} = turn
       const {row,col} = square
       gameBoard[row][col]=player
    }
    return gameBoard
  }

  
  export default deriveGameBoard
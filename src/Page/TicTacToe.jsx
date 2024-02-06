import React from 'react'
import { useState,useEffect } from 'react'
import Bord from '../Components/TicTacToe/Bord'
import GameState from '../Components/TicTacToe/GameState'
import GameOver from '../Components/TicTacToe/GameOver'
const PLAYER_X='X'
const PLAYER_O='O'

const  winningCombinations=[
 //Rows
 { combo: [0, 1, 2], strikeClass: "strike-row-1" },
 { combo: [3, 4, 5], strikeClass: "strike-row-2" },
 { combo: [6, 7, 8], strikeClass: "strike-row-3" },

 //Columns
 { combo: [0, 3, 6], strikeClass: "strike-column-1" },
 { combo: [1, 4, 7], strikeClass: "strike-column-2" },
 { combo: [2, 5, 8], strikeClass: "strike-column-3" },

 //Diagonals
 { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
 { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

function checkWinner(tiles, setStrikeClass ,setGameState) {
    for (const { combo, strikeClass } of winningCombinations) {
      const tileValue1 = tiles[combo[0]];
      const tileValue2 = tiles[combo[1]];
      const tileValue3 = tiles[combo[2]];
  
      if (
        tileValue1 !== null &&
        tileValue1 === tileValue2 &&
        tileValue1 === tileValue3
      ) {
        setStrikeClass(strikeClass);

        if (tileValue1 === PLAYER_X) {
            setGameState(GameState.playerXWins);
          } else {
            setGameState(GameState.playerOWins);
          }
          return;
      }
    }
  
    const areAllTilesFilledIn = tiles.every((tile) => tile !== null);
    console.log(areAllTilesFilledIn)
    if (areAllTilesFilledIn) {
      setGameState(GameState.draw);
    }
  }

function TicTacToe() {
    
    const [tiles , setTile]=useState(Array(9).fill(null));
    const [playerTuran, setPlayerTuran]=useState(PLAYER_X); 
    const [strikeClass, setStrikeClass]=useState();
    const [gameState, setGameState]=useState(GameState.inProgress);

    const handelTileCilck =(index)=>{
        if (gameState !== GameState.inProgress) {
            return;
        }

        if(tiles[index] != null){
            return;
        }
        const newTiles=[...tiles];
        newTiles[index]=playerTuran;
        setTile(newTiles);
        if(playerTuran===PLAYER_X){
            setPlayerTuran(PLAYER_O)
        }else{
            setPlayerTuran(PLAYER_X)
        }

    };

    useEffect(()=>{
        checkWinner(tiles, setStrikeClass,setGameState)
   }, [tiles])

  return (
    <div>
        <h1>Tic Tac Toe</h1>
        <Bord strikeClass={strikeClass} playerTuran={playerTuran} tiles={tiles} onTileClick={handelTileCilck} />
         <GameOver gameState={gameState}/>
    </div>
  )
}

export default TicTacToe

import React from 'react'
import { useState } from 'react'
import Bord from '../Components/TicTacToe/Bord'

const PLAYER_X='X'
const PLAYER_O='O'

function TicTacToe() {
    
    const [tiles , setTile]=useState(Array(9).fill(null));
    const [playerTuran, setPlayerTuran]=useState(PLAYER_X); 

    const handelTileCilck =(index)=>{
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

  return (
    <div>
        <h1>Tic Tac Toe</h1>
        <Bord tiles={tiles} onTileClick={handelTileCilck} />
    </div>
  )
}

export default TicTacToe

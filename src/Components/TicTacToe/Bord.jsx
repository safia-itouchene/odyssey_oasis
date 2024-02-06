import React from 'react'
import Tile from './Tile'
import Strike from './Strike'
import './TicTacToe.css'
import GameOver from './GameOver'
function Bord({tiles , onTileClick , playerTuran ,strikeClass}) {
  return (
    <div className='board'>
         <Tile playerTuran={playerTuran} onClick={()=> onTileClick(0)} value={tiles[0]} className='right-border bottom-border'/>
         <Tile playerTuran={playerTuran} onClick={()=> onTileClick(1)} value={tiles[1]} className='right-border bottom-border'/>
         <Tile playerTuran={playerTuran} onClick={()=> onTileClick(2)} value={tiles[2]} className='bottom-border'/>
         <Tile playerTuran={playerTuran} onClick={()=> onTileClick(3)} value={tiles[3]} className='right-border bottom-border'/>
         <Tile playerTuran={playerTuran} onClick={()=> onTileClick(4)} value={tiles[4]} className='right-border bottom-border'/>
         <Tile playerTuran={playerTuran} onClick={()=> onTileClick(5)} value={tiles[5]} className='bottom-border'/>
         <Tile playerTuran={playerTuran} onClick={()=> onTileClick(6)} value={tiles[6]} className='right-border'/>
         <Tile playerTuran={playerTuran} onClick={()=> onTileClick(7)} value={tiles[7]} className='right-border'/>
         <Tile playerTuran={playerTuran} onClick={()=> onTileClick(8)} value={tiles[8]} />
         <Strike strikeClass={strikeClass}/>
         <GameOver/>
    </div>
  )
}

export default Bord

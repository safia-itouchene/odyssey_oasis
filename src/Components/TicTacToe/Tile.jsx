import React from 'react'

function Tile({ onClick,value,className , playerTuran}) {
  let hoverClass=null;
  if(value==null && playerTuran != null){
       hoverClass= `${playerTuran.toLowerCase()}-hover`
       console.log(hoverClass)
  }
       
  return (
    <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>{value}
    </div>
  )
}

export default Tile

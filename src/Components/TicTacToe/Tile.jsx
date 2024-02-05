import React from 'react'

function Tile({ onClick,value,className }) {
  return (
    <div onClick={onClick} className={`tile ${className}`}>{value}
    </div>
  )
}

export default Tile

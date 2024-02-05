import React from 'react';
import './Gsection.css';
import { items } from '/src/Items/items.jsx';

function Gsection() {
  return (
    <div className='main-section'>
      {items.map((item, key) => (
        <div className="game-section" key={key}>
          <img src={item.image} alt="" />
          <div className='details'>
            <h2>{item.title}</h2>
            <button>play now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gsection;

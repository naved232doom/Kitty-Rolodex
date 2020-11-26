import React from 'react'
import './card.styles.css';

export const Card =props => (
    <div className='card-container'>
    
       <img alt="monster" src={`https://robohash.org/${Math.floor(Math.random() * 100)}?set=set4&size=180x180`}/>
        <h1 > {props.monster.name} </h1>
        <p><b>Email-</b>{props.monster.email}</p>
        
        
    </div>
)
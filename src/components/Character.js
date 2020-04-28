import React from 'react';

const Character = (props) => {

  return (
    <div className='character'>
      <img src={props.img} alt={props.name}/>
      <p>Name: {props.name}</p>
      <p>Species: {props.species}</p>
    </div>
  )
}

export default Character;
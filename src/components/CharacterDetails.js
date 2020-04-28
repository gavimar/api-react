  import React from 'react';
  import logo from '../images/logo.png';
 

  import styled, { css } from 'styled-components';


  import {Link } from "react-router-dom";

  const CharacterDetails = (props) => {
    console.log(props)
    
    const Button = styled.button`
    background: black;
    border-radius: 3px;
    border: 2px solid black;
    color: white;
    margin: 0.5em 1em;
    padding: 0.25em 1em;

    ${props => props.primary && css`
      background: black;
      color: white;
    `}
  `;

   
    const updateIcon = () =>{
      if (props.characterObj.status === "Alive"){
        return "fas fa-smile" ;
      }
      else if (props.characterObj.status === "Dead"){
        return "fas fa-skull-crossbones";
      } else {
        return "fas fa-question"
      } 
    }

    return (
      
      <div className="character-details">
        <header className = "header">
        <img src = {logo} alt ="logo"></img>
          <Link to="/"><Button>Back</Button></Link>

            
              </header>
        <div className= "card">
          <div className="image">
        <img className= "character-image" src={props.characterObj.image} alt={props.characterObj.name}/>
        </div>
        <div className="card-details">
        <p>Name: {props.characterObj.name}</p>
    <p>Species: {props.characterObj.species}</p>
    
    <p>Origin: {props.characterObj.origin.name}</p>
    <p>Number of episodes: {props.characterObj.episode.length}</p>
    <p>Current Status: {props.characterObj.status} 
    <i className={`${updateIcon()}`}></i>
    </p>
    </div>
    </div>
      </div>
    )
  }

  export default CharacterDetails;
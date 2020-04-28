  import React from 'react';
  import Character from './Character';
  import { Link } from 'react-router-dom';


  const CharacterList = (props) => {
    console.log(props.inputValue)
    const {dataList} = props;
    const foundCharacter=!dataList.length? <div className="input-error">There are no characters with that name. Try again.</div>:"";
    return (
      <div>
        {foundCharacter}
      <ul className="character-list">
        {dataList.sort((a,b) =>{
          if (a.name< b.name) {return -1}
          if (a.name> b.name) {return 1}
          return 0
        })
        .map(characterObj =>
            <li key={characterObj.id}>
              <Link to={`/character/${characterObj.id}`}>
                <Character
                  img={characterObj.image}
                  name={characterObj.name}
                  species = {characterObj.species}
                />
              </Link>
            </li>
          )}
      </ul>
      </div>
    )
  }

  export default CharacterList;
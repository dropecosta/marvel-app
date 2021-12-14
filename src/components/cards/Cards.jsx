import React, { useState } from 'react'
import {connect} from 'react-redux'
import { Card } from './styles.js';

const Cards = props => {
  console.log('props', props);


  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("charData");
    const initialValue = JSON.parse(saved);
    console.log('initialValue', initialValue);
    return initialValue || null;
  });

  console.log('name', name);


  const showCharacterDetails = (charData) => {
  localStorage.setItem('charData', JSON.stringify(charData));

  const saved = localStorage.getItem("charData");
  const storageValue = JSON.parse(saved);
  console.log('storageValue', storageValue);
  setName(storageValue);

  window.location.href = '#/character';

  


    if (localStorage.getItem("charData").id === props.card.id) {
      console.log('sim! props.card.id', props.card.id)
    } else {
      console.log('não', props.card.id);
    }
  }

  return (
    <Card onClick={() => showCharacterDetails(props.card)}>
      <div className='img-content'>
        <img
          src={`${props.card.thumbnail.path}/portrait_fantastic.jpg`} 
          className="card-img-top" 
          alt='character'
        />
      </div>
      
      <div className="card-body">
        <h5 className="card-name">{props.characterData ? props.characterData.name : props.card.name}</h5>
      </div>
    </Card>
  )
}

const mapStateToProps = state => ({
  list: state.character.list,
})
export default connect(mapStateToProps)(Cards)
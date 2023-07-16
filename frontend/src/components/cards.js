import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      
      <h1>Planning a trip? Think about some of these awesome locations TRVL users have been to!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src="img-2.jpg"
            text="The Eiffel Tower"
            label="France"
            path="/LogIn"
            ></CardItem>
            <CardItem 
            src="img-3.jpg"
            text="The Colosseum"
            label="Italy"
            path="/LogIn"
            ></CardItem>
          </ul>
          <ul className='cards__items'>
            <CardItem 
            src="img-4.jpg"
            text="The Grand Canyon"
            label="Arizona"
            path="/LogIn"
            ></CardItem>
            <CardItem 
            src="img-5.jpg"
            text="Stonehenge"
            label="England"
            path="/LogIn"
            ></CardItem>
            <CardItem 
            src="img-6.jpg"
            text="The Pyramids"
            label="Egypt"
            path="/LogIn"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
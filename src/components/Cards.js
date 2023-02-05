import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="images/img-1.jpg"
              text='Explore the hidden Jungle'
              label='Adventure!'
              path='/services'
            />
            <CardItem
              src='images/tiger.jpg'
              text='Melghat Tiger Reserve'
              label='Wild'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/saleki.jpg'
              text='Mysterious Tusks'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/deer.jpg'
              text='Deep Dive into the wild'
              label='Majestic'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
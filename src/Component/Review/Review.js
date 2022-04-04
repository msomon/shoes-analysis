import React from 'react';
import './Review.css'

const Review = ({review}) => {
  return (
    <div className='cart'>
      <div className='part'>
      <div >
        <img className='image' src={review.img} alt="" />
      </div>
      <div>
      <h1>Name:{review.name}</h1>
      </div>
      
      </div>
      <p>Comment:{review.comment}</p>
      <h4>Rating:{review.rating}</h4>
    </div>
  );
};

export default Review;
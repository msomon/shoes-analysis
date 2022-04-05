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
      <h2>{review.name}</h2>
      </div>
      
      </div>
      <p className='comment'>{review.comment}</p>
      <h3>Rating:{review.rating}</h3>
    </div>
  );
};

export default Review;
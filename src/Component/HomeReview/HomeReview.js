import React from 'react';
import './HomeReview';
const HomeReview = ({review}) => {
  return (
    <div className='cart'>
      <div className='part'>
      <div >
        <img className='image' src={review.img} alt="" />
      </div>
      <div>
      <h2>Name:{review.name}</h2>
      </div>
      
      </div>
      <p className='comment'>Comment:{review.comment}</p>
      <h3>Rating:{review.rating}</h3>
    </div>
  );
};

export default HomeReview;
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
  const [reviews,setReviews]=useState([])

   useEffect( ()=>{
     fetch('review.json')
     .then(res=>res.json())
     .then(data=>setReviews(data))
   },[])
  return (
    <div className='reviews'>
      {
        reviews.map(review=><Review review={review} key={review.id}></Review>)
      }
    </div>
  );
};

export default Reviews;
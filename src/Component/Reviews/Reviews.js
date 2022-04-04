
import useProducts from '../Hooks/useProducts';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
  const [reviews,setReviews]= useProducts()
   
  return (
    <div className='reviews'>
      {
        reviews.map(review=><Review review={review} key={review.id}></Review>)
      }
    </div>
  );
  return [reviews,setReviews] 
};

export default Reviews;
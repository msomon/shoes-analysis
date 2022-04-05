

import { Link } from 'react-router-dom';
import HomeReview from '../HomeReview/HomeReview';
import useProducts from '../Hooks/useProducts';
import './Home.css'

const Home = () => { 
  
const [reviews,setReviews]= useProducts()
  return (
    <div className='all-container'>
      <div className='container'>
      <div className='info'>     
      <h1>YOUR CHOICE </h1>
      <h1> OUR COMMIETMENT </h1>
      <p>Some people have hobbies. We have shoes. At shoes.com, shoes aren't just a part of our name, they are our passion. Here you'll find an incredible selection of fashionable footwear from popular and premium labels. Each season</p>
      <button className='button'>Live Demo</button>
      </div>
      <div className='image'>
     <img src="https://img.freepik.com/free-photo/pair-blue-running-sneakers-white-background-isolated_77190-7490.jpg?w=1380" alt="" />
      </div>
      </div>

      <div className='review'>
      <h1 className='title'>Reviews(6..)</h1>
      <div className='reviews'>  
      {
        reviews.slice(0,3).map(review=><HomeReview review={review} key={review.id}></HomeReview>)
      }
     
      </div>
      <Link className='see-more' to="/reviews">See-All-Reviews</Link>
      </div>
      
    </div>
  );
};

export default Home;
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../styles/ArticleShow.css';
import json from '../../apis/json';
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_PAY_PUBLIC_KEY);

const ArticleShow = () => {
  const location = useLocation();

  const handleClick = async (event) => {
    
    const stripe = await stripePromise;
    const response = await json.post("/checkout/create", {
      id: location.state.article.id,
      headers: { "Content-Type": "application/json",
      'X-Requested-With': 'XMLHttpRequest'},
    });
    console.log(response)
    const session = await response.data;
    
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result)
    }
  };

  return(
    <div className='articleShow'>
      <p>{location.state.article.name}</p>
      <p>¥{location.state.article.price}</p>
      <Link to="/">×</Link>
      <button id="checkout-button" role="link" onClick={handleClick}>
        決済
      </button>
    </div>
  )
}

export default ArticleShow;
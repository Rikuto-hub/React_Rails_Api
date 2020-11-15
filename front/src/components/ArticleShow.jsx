import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/ArticleShow.css';

import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.REACT_APP_PAY_PUBLIC_KEY);

const ArticleShow = (state) => {
  const location = useLocation();

  const handleClick = async (event) => {
    
    const stripe = await stripePromise;
    const response = await fetch(process.env.REACT_APP_DEV_API_URL + "/checkout/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body : JSON.stringify({ id: location.state.article.id }),
    });
    console.log(response)
    const session = await response.json();
    
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
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
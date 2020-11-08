import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/ArticleShow.css';

const ArticleShow = (state) => {
  const location = useLocation();

  return(
    <div className='articleShow'>
      <p>{location.state.article.name}</p>
      <p>¥{location.state.article.price}</p>
      <Link to="/">×</Link>
    </div>
  )
}

export default ArticleShow;
import React from 'react';
import { useLocation } from 'react-router-dom';

const ArticleShow = (state) => {
  const location = useLocation();

  return(
    <div className='articleShow'>
      <p>{location.state.article.name}</p>
    </div>
  )
}

export default ArticleShow;
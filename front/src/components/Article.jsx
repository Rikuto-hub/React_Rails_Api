import React from 'react';
import '../styles/Article.css';

const Article = ({articles}) =>{
  return(
    <>
      {articles.map((article) => (
        <div className='article'>
          <p key={article.id}>{article.name}</p>
          <p key={article.id}>{article.price}</p>
          <p key={article.id}>{article.content}</p>
        </div>
      ))}
    </>
  )
}

export default Article;
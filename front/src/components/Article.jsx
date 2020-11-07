import React from 'react';
import '../Article.css';

const Article = ({articles}) =>{
  return(
    <React.Fragment>
      {articles.map((article) => (
        <div className='article'>
          <p key={article.id}>{article.name}</p>
          <p key={article.id}>{article.price}</p>
          <p key={article.id}>{article.content}</p>
        </div>
      ))}
    </React.Fragment>
  )
}

export default Article;
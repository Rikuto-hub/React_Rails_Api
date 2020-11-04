import React from 'react';

const Article = ({articles}) =>{
  return(
    <React.Fragment>
      {articles.map((article) => (
        <p key={article.id}>{article.name}</p>
      ))}
    </React.Fragment>
  )
}

export default Article;
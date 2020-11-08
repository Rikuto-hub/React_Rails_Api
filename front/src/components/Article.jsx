import React,{useState,useEffect} from 'react';
import ArticleShow from './ArticleShow';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Article.css';

const Article = ({articles}) => {
  
  return(
    <Router>
      {React.Children.toArray(articles.map((article) => (
        <Link to={{pathname:"/article/show/", state: {article} }}>
          <div className='article' >
            <p>{article.name}</p>
            <p>{article.price}</p>
            <p>{article.content}</p>
          </div>
        </Link>
      )))}
      <Route path="/article/show/" exact component={ArticleShow} />
      {/* <ArticleShow article = {article} /> */}
    </Router>
  )
}
export default Article;
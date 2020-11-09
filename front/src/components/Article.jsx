import React,{useState,useEffect} from 'react';
import ArticleShow from './ArticleShow';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Article.css';

const Article = ({articles}) => {
  console.log(articles)
  return(
    <Router>
      {React.Children.toArray(articles.map((article) => (
        <Link to={{pathname:"/article/show/", state: {article} }}>
          <div className='article' >
            <img src={article.image} />
            <p>{article.name}</p>
            <p>¥{article.price}</p>
            <p>{article.content}</p>
          </div>
        </Link>
      )))}
      <Switch>
        <Route path="/article/show/" exact component={ArticleShow} />
      </Switch>
      {/* <ArticleShow article = {article} /> */}
    </Router>
  )
}
export default Article;
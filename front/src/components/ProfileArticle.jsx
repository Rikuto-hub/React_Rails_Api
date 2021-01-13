import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleShow from './ArticleShow';

const ProfileArticle = ({articles}) => {
  return(
    <Router>
      {React.Children.toArray(articles.map((article) => (
        <Link to={{pathname:"/article/show/", state: {article} }}>
          <div className='article' >
            <img src={article.image} alt="画像がありません" />
          </div>
        </Link>
      )))}
      <Switch>
        <Route path="/article/show/" exact component={ArticleShow} />
      </Switch>
    </Router>
  )
}

export default ProfileArticle;
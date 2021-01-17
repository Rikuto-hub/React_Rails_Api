import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleShow from '../article/ArticleShow';
import Skeleton from 'react-loading-skeleton';
import { Img } from 'react-image';

const ProfileArticle = ({articles}) => {
  return(
    <Router>
      {React.Children.toArray(articles.map((article) => (
        <Link to={{pathname:"/article/show/", state: {article} }}>
          <div className='profileArticle' >
            <Img src={article.image}
                loader={<Skeleton width={111.66} height={111.66} />}
                unloader={<Skeleton width={111.66} height={111.66} />}
            />
          </div>
        </Link>
      )))}
      <p className='clear'></p>
      <Switch>
        <Route path="/article/show/" exact component={ArticleShow} />
      </Switch>
    </Router>
  )
}

export default ProfileArticle;
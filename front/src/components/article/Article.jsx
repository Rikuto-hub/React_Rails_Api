import React from 'react';
import ArticleShow from './ArticleShow';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { Img } from 'react-image';
import '../../styles/Article.css';

const Article = ({articles}) => {

  return(
    <Router>
      {React.Children.toArray(articles.map((article) => (
        <Link to={{pathname:"/article/show/", state: {article} }}>
          <div className='article' >
            <Img src={article.image}
              loader={<Skeleton width={335} height={170}/>}
              unloader={<Skeleton width={335} height={170}/>}
            />
            <p>{article.name}</p>
            <p>¥{article.price}</p>
            <p>{article.content}</p>
          </div>
        </Link>
      )))}
      <Switch>
        <Route path="/article/show/" exact component={ArticleShow} />
      </Switch>
    </Router>
  )

}
export default Article;
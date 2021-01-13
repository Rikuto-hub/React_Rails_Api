import React from 'react';
import { Link, BrowserRouter as Router} from 'react-router-dom';

const ProfileArticle = ({articles}) => {
  return(
    <Router>
      {React.Children.toArray(articles.map((article) => (
        <Link to={{pathname:"/article/show/", state: {article} }}>
          <div className='article' >
            <img src={article.image} alt="画像がありません" />
            <p>{article.name}</p>
            <p>¥{article.price}</p>
            <p>{article.content}</p>
          </div>
        </Link>
      )))}
    </Router>
  )
}

export default ProfileArticle;
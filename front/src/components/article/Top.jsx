import React, { useEffect } from 'react';
import Article from './Article';
import Loading from '../Loading';
import ArticleSearch from './ArticleSearch';

const Top = ({articles,getArticles,searchArticles}) =>{
  useEffect(() => {
    getArticles()
  }, [getArticles])

  return(
    <>
      {articles[0] ?(
        <>
          <ArticleSearch searchArticles = {searchArticles} />
          <Article articles = {articles} />
        </>
        ) : (
        <Loading />
      )}
    </>
  )
}

export default Top;
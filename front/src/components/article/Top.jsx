import React, { useEffect,useState } from 'react';
import json from '../../apis/json';
import Article from './Article';
import Loading from '../Loading';
import ArticleSearch from './ArticleSearch';

const Top = () =>{
  const [articles, setArticles] = useState([]);

  const searchArticles = async(word) => {
    try {
      const params = {
        search: word
      };
      const response = await json.get('/searches',{params})
      setArticles(response.data)
      console.log( response );
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getArticles = async() => {
      try {
        const response = await json.get('/articles')
        setArticles(response.data)
        console.log( response );
      } catch (error) {
        console.log(error)
      }
    }
    getArticles()
  }, [])
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
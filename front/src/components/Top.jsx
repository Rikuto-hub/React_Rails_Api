import React, { useEffect,useState } from 'react';
import json from '../apis/json';
import Article from './Article';
import ArticleSearch from './ArticleSearch';

const Top = () =>{
  const [articles, setArticles] = useState([]);

  const searchArticles = async(word) => {
    try {
      const params = {
        search: word
      };
      const results = await json.get('/searches',{params},{ withCredentials: true })
      setArticles(results.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getArticles = async() => {
      try {
        const results = await json.get('/articles',{ withCredentials: true })
        setArticles(results.data)
      } catch (error) {
        console.log(error)
      }
    }
    getArticles()
  }, [])
  return(
    <>
      <ArticleSearch searchArticles = {searchArticles} />
      <Article articles = {articles} />
    </>
  )
}

export default Top;
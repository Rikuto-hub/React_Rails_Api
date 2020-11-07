import React, { useEffect,useState } from 'react';
import json from '../apis/json';
import Article from './Article';

const Top = () =>{
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async() => {
      try {
        const results = await json.get('/articles')
        setArticles(results.data)
      } catch (error) {
        console.log(error)
      }
    }
    getArticles()
  }, [])
  return(
    <>
      <Article articles = {articles} />
    </>
  )
}

export default Top;
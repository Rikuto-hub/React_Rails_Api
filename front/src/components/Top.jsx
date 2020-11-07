import React, { useEffect,useState } from 'react';
import json from '../apis/json';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Article from './Article';
import articleCreate from './articleCreate';

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
    <Router>
      <Article articles = {articles} />
    </Router>
  )
}

export default Top;
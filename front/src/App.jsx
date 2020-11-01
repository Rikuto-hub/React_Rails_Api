import React, { useEffect, useState } from 'react';
import './App.css';
import json from './apis/json';

const App = () =>  {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    
    const results = await json.get('/articles')
    setArticles({articles: results.data})
  }

  useEffect(() => {
    getArticles()
  }, [])
    // axios.get('/articles')
    // .then((results) => {
    //   setArticles({articles: results.data})
    // })
    // .catch((data) =>{
    //   console.log(data)
    // })
  return(
    <div>
      <p>aaaaa</p>
    </div>
  )
}

export default App;
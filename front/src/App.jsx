import React, { useEffect,useState } from 'react';
import './App.css';
import json from './apis/json';
import Article from './components/Article';

// class App extends React.Component {

//    constructor(props) {
//     super(props);
//     //const results = json.get('/articles')
//     this.state = { articles: [] };
//   }

//   render() {
//     return(
//       <Article articles = {this.state.articles}/>
//     )
//   }
// }

const App = () =>{
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
    <Article articles = {articles}/>
  )
}

export default App;
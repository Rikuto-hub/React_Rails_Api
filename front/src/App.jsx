import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Top from './components/Top';
import articleCreate from './components/articleCreate';

const App = () =>{
  return(
    <Router>
      <Header/>
      <div className='container'>
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/article/create/" exact component={articleCreate} />
        </Switch>
        <Link to="/article/create/">
        <button className='create_btn'>+</button>
        </Link>
      </div>
    </Router>
  )
}

export default App;
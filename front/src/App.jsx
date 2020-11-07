import React, { useEffect,useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Top from './components/Top';
import articleCreate from './components/articleCreate';

const App = () =>{
  return(
    <div className='container'>
      <Router>
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/article/create/" exact component={articleCreate} />
        </Switch>
        <Link to="/article/create/">
        <button className='create_btn'>+</button>
        </Link>
      </Router>
    </div>
  )
}

export default App;
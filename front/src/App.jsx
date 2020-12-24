import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Top from './components/Top';
import articleCreate from './components/ArticleNew';
import Search from './components/Search';
import Movies from './components/Movies';
import Connection from './components/Connection';
import Advertisement from './components/Advertisement';
import Registration from './components/Registration';

const App = () =>{
  return(
    <Router>
      <Header />
      <div className='container'>
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/article/create/" exact component={articleCreate} />
          <Route path="/search" exact component={Search} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/connection" exact component={Connection} />
          <Route path="/ad" exact component={Advertisement} />
          <Route path="/registration" exact component={Registration} />
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
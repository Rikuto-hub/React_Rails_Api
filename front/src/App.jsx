import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Top from './components/Top';
import articleCreate from './components/ArticleNew';
import Image from './components/Image';
import Movies from './components/Movies';
import Connection from './components/Connection';
import ConnectionNew from './components/ConnectionNew';
import Advertisement from './components/Advertisement';
import Registration from './components/Registration';
import Login from './components/Login';
import Auth from './components/Auth';
import ProfileNew from './components/ProfileNew';

const App = () =>{
  return(
    <Router>
      <Header />
      <div className='container'>
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/Image" exact component={Image} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/connection" exact component={Connection} />
          <Route path="/ad" exact component={Advertisement} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/profile/edit" exact component={ProfileNew} />
          <Route path="/login" exact component={Login} />
          <Auth>
            <Switch>
              <Route path="/article/create/" exact component={articleCreate} />
              <Route path="/connection/new/" exact component={ConnectionNew} />
            </Switch>
          </Auth>
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
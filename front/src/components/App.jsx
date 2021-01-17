import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Top from './article/Top';
import articleCreate from './article/ArticleNew';
import Image from './Image/Image';
import Movies from './movie/Movies';
import Connection from './connection/Connection';
import ConnectionNew from './connection/ConnectionNew';
import Advertisement from './ad/Advertisement';
import Registration from './auth/Registration';
import Login from './auth/Login';
import Auth from './auth/Auth';
import Profile from './profile/Profile';
import ProfileNew from './profile/ProfileNew';
import Account from './profile/Account'

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
          <Route path="/account" exact component={Account} />
          <Route path="/ad" exact component={Advertisement} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/login" exact component={Login} />
          <Auth>
            <Switch>
              <Route path="/profile" exact component={Profile} />
              <Route path="/profile/edit" exact component={ProfileNew} />
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
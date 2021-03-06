import React, { useState, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import Top from './article/Top';
import articleCreate from './article/ArticleNew';
import Image from './Image/Image';
import Movies from './movie/Movies';
import Connection from './connection/Connection';
import ConnectionNew from './connection/ConnectionNew';
import Registration from './auth/Registration';
import Login from './auth/Login';
import Auth from './auth/Auth';
import Profile from './profile/Profile';
import ProfileNew from './profile/ProfileNew';
import Account from './profile/Account';
import Advertisement from './ad/Advertisement';
import json from '../apis/json';

const Wrap = () =>{
  const [articles, setArticles] = useState([]);
  const getArticles = useCallback(async() => {
    try {
      const response = await json.get('/articles')
      setArticles(response.data)
      console.log( response );
    } catch (error) {
      console.log(error)
    }
  }, [])

  const searchArticles = async(word) => {
    setArticles([])
    try {
      const params = {
        search: word
      };
      const response = await json.get('/searches',{params})
      if(response.data[0]){
        setArticles(response.data)
      }else{
        setArticles([{name: "一致しませんでした。"}])
      }
      console.log( response );
    } catch (error) {
      console.log(error)
    }
  }

  const [connections, setConnections] = useState([]);
  const getConnections = useCallback(async() => {
    try {
      const response = await json.get('/connections')
      setConnections(response.data)
      console.log( response );
    } catch (error) {
      console.log(error)
    }
  }, [])

  return(
    <div className='container'>
      <Switch>
        <Route exact path='/' render={
          () => <Top articles={articles} getArticles={getArticles} searchArticles={searchArticles}/> 
        }/>
        <Route exact path='/connection' render={
          () => <Connection connections={connections} getConnections={getConnections} /> 
        }/>
        {/* <Route path="/" exact component={Top} /> */}
        {/* <Route path="/connection" exact component={Connection} /> */}
        <Route path="/Image" exact component={Image} />
        <Route path="/movies" exact component={Movies} />
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
  )
}

export default Wrap;
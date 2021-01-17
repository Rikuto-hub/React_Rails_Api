import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import json from '../../apis/json';
import ProfileTop from './ProfileTop';
import ProfileTag from './ProfileTag'
import ConnectionView from '../connection/ConnectionView';
import ProfileArticle from './ProfileArticle';

const Account = () => {

  const [profile, setProfile] = useState()
  const [connections, setConnection] = useState([])
  const [articles, setArticle] = useState([])
  const location = useLocation();
  const props = "フォロー"
  const path = "/account"

  useEffect(() => {
    const getProfile = async() => {
      try {
        const response = await json.get('/account', {
          params:{
          id: location.state.user_id,
          }
        })
        setProfile(response.data)
        setConnection(response.data.connections)
        setArticle(response.data.articles)
        console.log( response );
      } catch (error) {
        console.log(error)
      }
    }
    getProfile()
  }, [location.state.user_id])

  return(
    <>
      <ProfileTop profile = {profile} props = {props} />
      <Router>
        <ProfileTag path = {path}/>
        <Switch>
          <Route exact path="/account" render={() => <ConnectionView connections={connections} />} />
          <Route exact path="/account/article" render={() => <ProfileArticle articles={articles} />} />
        </Switch>
      </Router>
    </>
  )
}

export default Account;
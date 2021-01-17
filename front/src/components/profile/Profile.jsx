import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import json from '../../apis/json';
import ProfileTop from './ProfileTop';
import ProfileTag from './ProfileTag'
import ConnectionView from '../connection/ConnectionView';
import ProfileArticle from './ProfileArticle';
import Loading from '../Loading';


const Profile = () => {

  const [profile, setProfile] = useState()
  const [connections, setConnection] = useState([])
  const [articles, setArticle] = useState([])
  const props = "プロフィールを編集する"
  const path = "/profile"

  useEffect(() => {
    const getProfile = async() => {
      try {
        const response = await json.get('/profile')
        setProfile(response.data)
        setConnection(response.data.connections)
        setArticle(response.data.articles)
        console.log( response );
      } catch (error) {
        console.log(error)
      }
    }
    getProfile()
  }, [])

  return(
    <>
      {profile ?(
        <>
          <ProfileTop profile = {profile} props = {props} />
          <Router>
            <ProfileTag path = {path}/>
            <Switch>
              <Route exact path="/profile" render={() => <ConnectionView connections={connections} />} />
              <Route exact path="/profile/article" render={() => <ProfileArticle articles={articles} />} />
            </Switch>
          </Router>
        </>
        ) : (
        <Loading />
      )}
    </>
  )
}

export default Profile;
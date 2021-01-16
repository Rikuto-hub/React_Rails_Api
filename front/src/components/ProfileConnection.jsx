import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const ProfileConnection = ({connections}) => {
  return(
    <Router>
      {React.Children.toArray(connections.map((connection) => (
        <a href={connection.url} target="_Blank" rel="noopener noreferrer" className='connectionTop'>
          <div className='connectionItem' >
            <p>{connection.content}</p>
          </div>
        </a>
      )))}
    </Router>
  )
}

export default ProfileConnection;
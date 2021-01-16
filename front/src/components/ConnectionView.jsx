import React from 'react';
import { Link } from 'react-router-dom';

const ConnectionView = ({connections}) =>{

  const connection = connections.map(connection => {
    return(
    <>
      <Link to = {{ pathname: '/account', state: {user_id: connection.user_id} }}>{connection.user_name}</Link>
      <a href={connection.url} target="_Blank" rel="noopener noreferrer" className='connectionTop'>
        <div className='connectionItem' >
          <p>{connection.content}</p>
        </div>
      </a>
    </>
    )
  })

  return(
    <>
      {connection}
    </>
  )
}

export default ConnectionView;
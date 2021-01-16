import React from 'react';
import { Link } from 'react-router-dom';

const ConnectionView = ({connections}) =>{

  const connection = connections.map(connection => {
    return(
    <div key={connection.id}>
      <div className='connectionUser'>
        <Link to = {{ pathname: '/account', state: {user_id: connection.user_id} }}>
          <img src={connection.avatar} alt=""/>
          <p>{connection.user_name}</p>
        </Link>
      </div>
      <a href={connection.url} target="_Blank" rel="noopener noreferrer" className='connectionTop'>
        <div className='connectionItem' >
          <p>{connection.content}</p>
        </div>
      </a>
    </div>
    )
  })

  return(
    <>
      {connection}
    </>
  )
}

export default ConnectionView;
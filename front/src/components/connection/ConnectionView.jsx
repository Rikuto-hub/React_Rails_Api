import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { Img } from 'react-image';

const ConnectionView = ({connections}) =>{

  const connection = connections.map(connection => {
    return(
    <div key={connection.id}>
      {connection.avatar &&(
      <div className='connectionUser'>
        <Link to = {{ pathname: '/account', state: {user_id: connection.user_id} }}>
          <Img src={connection.avatar}
            loader={<Skeleton width={30} height={30} />}
            unloader={<Skeleton width={30} height={30} />}
          />
          <p>{connection.user_name}</p>
        </Link>
      </div>
      )}
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
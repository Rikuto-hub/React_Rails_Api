import React from 'react';

const ConnectionView = ({connections}) =>{
  return(
    <>
      {React.Children.toArray(connections.map((connection) => (
          <div className='connection' >
            <a href={connection.url} target="_Blank" rel="noopener noreferrer">
              <p>{connection.content}</p>
            </a>
          </div>
      )))}
    </>
  )
}

export default ConnectionView;
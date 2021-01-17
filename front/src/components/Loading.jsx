import React from 'react';
import ReactLoading from 'react-loading';
import '../styles/loading.css'

const Loading = () => {
  return(
    <div className='loading'>
      <p>Loading</p>
      <ReactLoading type="bars" className='loadingIcon' color='#CCCCFF' width='200px' height='200px' />
    </div>
  )
}

export default Loading;
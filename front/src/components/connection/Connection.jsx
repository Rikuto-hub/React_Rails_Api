import React, { useEffect } from 'react';
import ConnectionView from './ConnectionView';
import Loading from '../Loading';
import '../../styles/connection.css';
import { Link } from 'react-router-dom';
import { BsPlusCircleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiArticleLine } from "react-icons/ri";

const Connection = ({connections, getConnections}) =>{
  useEffect(() => {
    getConnections()
  }, [getConnections])

  return(
    <>
      {connections[0] ?(
        <>
          <div className='profileWrapper'>
            <p><RiArticleLine className='profileIcon'/></p>
            <Link to="/profile"><p><CgProfile className='profileIcon'/></p></Link>
          </div>
          < ConnectionView connections = {connections} />
          <Link to="/connection/new/" className='connectionBtn'>
              <BsPlusCircleFill />
          </Link>
        </>
        ) : (
        <Loading />
      )}
    </>
  )
}

export default Connection;
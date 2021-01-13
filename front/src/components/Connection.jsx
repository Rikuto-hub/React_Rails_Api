import React, { useEffect,useState } from 'react';
import json from '../apis/json';
import ConnectionView from './ConnectionView'
import '../styles/connection.css'
import { Link } from 'react-router-dom';
import { BsPlusCircleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiArticleLine } from "react-icons/ri";

const Connection = () =>{
  const [connections, setConnections] = useState([]);
  useEffect(() => {
    const getConnections = async() => {
      try {
        const response = await json.get('/connections')
        setConnections(response.data)
        console.log( response );
      } catch (error) {
        console.log(error)
      }
    }
    getConnections()
  }, [])
  return(
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
  )
}

export default Connection;
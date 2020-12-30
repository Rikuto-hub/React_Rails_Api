import React, { useEffect,useState } from 'react';
import json from '../apis/json';
import ConnectionView from './ConnectionView'
import '../styles/connection.css'
import { Link } from 'react-router-dom';
import { BsPlusCircleFill } from "react-icons/bs";

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
    < ConnectionView connections = {connections} />
    <Link to="/connection/new/" className='connectionBtn'>
        <BsPlusCircleFill />
    </Link>
    </>
  )
}

export default Connection;
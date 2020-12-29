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
        const results = await json.get('/connections')
        setConnections(results.data)
        console.log( results );
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
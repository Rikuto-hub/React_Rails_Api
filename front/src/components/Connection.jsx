import React, { useEffect,useState } from 'react';
import json from '../apis/json';
import ConnectionView from './ConnectionView'
import '../styles/connection.css'

const Connection = () =>{
  const [connections, setConnections] = useState([]);
  useEffect(() => {
    const getConnections = async() => {
      try {
        const results = await json.get('/connections')
        setConnections(results.data)
      } catch (error) {
        console.log(error)
      }
    }
    getConnections()
  }, [])
  return(
    < ConnectionView connections = {connections} />
  )
}

export default Connection;
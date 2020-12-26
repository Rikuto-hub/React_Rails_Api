import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BsPlusCircleFill } from "react-icons/bs";
import ConnectionNew from './ConnectionNew';

const ConnectionView = ({connections}) =>{
  return(
    <Router>
      {React.Children.toArray(connections.map((connection) => (
        <a href={connection.url} target="_Blank" rel="noopener noreferrer" className='connectionTop'>
            <div className='connectionItem' >
              <p>{connection.content}</p>
          </div>
        </a>
      )))}
      <Link to="/connection/new/" className='connectionBtn'>
        <BsPlusCircleFill />
      </Link>
      <Route path="/connection/new/" exact component={ConnectionNew} />
    </Router>
  )
}

export default ConnectionView;
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Wrap from './Wrap';

const App = () =>{
  return(
    <Router>
      <Header />
      <Wrap />
      <Footer />
    </Router>
  )
}

export default App;
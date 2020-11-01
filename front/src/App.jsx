import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3000/articles')
    .then((results) => {
      this.setState({articles: results.data})
      console.log('results.data')
    })
    .catch((data) =>{
      console.log(data)
    })
  }
  render(){
    return (
    <div>
      <p>testtest</p>
    </div>
    )
  }
}

export default App;
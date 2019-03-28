import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentWillMount() {
    axios.post('http://localhost:3001', {
      does: 'this',
      work: '?',
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
      Hello
      </div>
    );
  }
}

export default App;

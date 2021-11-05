import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL: `https://ad37vz2hch.execute-api.us-east-2.amazonaws.com/prod/products`
})

class App extends Component {

  constructor() {
    super()
    api.get('/').then(res => {
      console.log(res.data)
    })
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scans On Set
          </a>
        </header>
      </div>
    );

  }
  
}

export default App;

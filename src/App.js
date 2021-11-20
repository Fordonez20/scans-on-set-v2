import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Scanner from './Scanner';
import NewScanner from './NewScanner';
//import { useEffect } from 'react';
//import useState from 'react-hook-use-state';
//import logo from './logo.svg';
//import styled from 'styled-components';


const api = axios.create({
  baseURL: `https://ad37vz2hch.execute-api.us-east-2.amazonaws.com/prod`
})

class App extends React.Component {

  state = {
    items: []
  }
  
  constructor() {
    super();
    this.getItems();
  } 

  getItems = async () => {
      let data = await api.get('/products').then(({ data }) => data );
      console.log(data);
      this.setState({ items: data.products });
  }

  createItem = async () => {
    let res = await api.post('/product', 
    {
      "productId": "55555",
      "productName": "Walkie Numba 55555", 
      "color": "Some String",
      "price": 200,
      "inventory": 10

    })
    console.log(res);
    this.getItems();
  }

  updateItem = async (productId, val) => {
    if (val === 'OUT') {
      let data = await api.patch('/product', { 
        "productId": productId,
        "updateKey": "color",
        "updateValue": "IN"
  
      })

    } else {
      let data = await api.patch('/product', { 
        "productId": productId,
        "updateKey": "color",
        "updateValue": "OUT"
  
      })

    }


    /*let data = await api.patch('/product', { 
      "productId": productId,
      "updateKey": "color",
      "updateValue": val

    })*/
    this.getItems();
  }

  getOneItem = async (productId) => {
    
    let data = await api.get(`/product?productId=${productId}`).then(({ data }) => data );
    console.log(data);
  }

  
  render() {
  return (
    <div className="App">
      <header className = "App-header">

        

        <Scanner/>


        {this.state.items.map(item => 
        <h2 key={item.productId} /*onClick={() =>this.updateItem(item.productId, `Updated`)}*/>
          <button onClick={() =>this.updateItem(item.productId, item.color)}> Update This Item</button>
          {item.productName} 
          {item.color}
        </h2>)}

        <button /*onClick={this.createItem}*/> Create An Item (off atm)</button>

      </header>

    </div>
    
  );
  }
}

export default App;


/* THIS WORKS ---------------------------------------------------

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://ad37vz2hch.execute-api.us-east-2.amazonaws.com/prod/products')
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <ul>
      {data.map((item) => (

        <li key={item.productId}>{item.productId} {item.productName} {item.color}</li>
        
      ))}
    </ul>

  );
}
  




export default App;

*/
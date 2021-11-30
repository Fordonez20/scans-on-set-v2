import React from 'react';
import axios from 'axios';
import './App.css';

const api = axios.create({
    baseURL: `https://ad37vz2hch.execute-api.us-east-2.amazonaws.com/prod`
  })

class Scanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '10001',
          name: "---",
          status: "---"
        };
  
        this.handleChange = this.handleChange.bind(this);
        this.getOneItem = this.getOneItem.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    getOneItem = async (event) => {
        this.setState({value: event.target.value});
        let productId = event.target.value;
        
        let data = await api.get(`/product?productId=${productId}`).then(({ data }) => data );
        console.log(data);
    }

    requestItem = async (event) => {
        let productId = this.state.value;
        
        let data = await api.get(`/product?productId=${productId}`).then(({ data }) => data );
        console.log(data);
        this.setState({name: data.productName}) 
        this.setState({status: data.color}) 
    }
  
    
    render() {
        let nameTag = this.state.name;
        let status = this.state.status;
      return (
        <div className="Scanner">
            <h6>Search 10001-10004</h6>
            <label>
                Search Bar:
                <input type="text" value={this.state.value} onChange={this.getOneItem} />
            </label>
            <h6  onClick={this.requestItem} > Submit Btn --> </h6>
            

            <h3>{nameTag} {status}</h3>
        
        </div>

      );
    }
  }

export default Scanner;
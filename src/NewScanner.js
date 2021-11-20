import React, { Component } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: `https://ad37vz2hch.execute-api.us-east-2.amazonaws.com/prod`
})

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <h1>{isLoggedIn}</h1>;
    }
    return <h1>{isLoggedIn}</h1>;
}

class NewScanner extends React.Component {
    constructor(props) {
        super(props);
        this.submitSearch = this.submitSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);

        
        
        this.state = {
            isLoggedIn: false,
            name: "defaultName"
        };
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }
    
   submitSearch() {
        this.setState({isLoggedIn: true});
        console.log(this.state.name);

        let submittedName = this.state.name;
        //let data = await api.get(`/product?productId=${submittedName}`).then(({ data }) => data );
        //console.log(data);
    }
    
    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button;
        let nameTag = this.state.name;

        if (isLoggedIn) {
            button = <h5 onClick={this.submitSearch} >Submit Search 1</h5>;
        } else {
            button = <h5 onClick={this.submitSearch} >Submit Search 2</h5>;
        }

        return (
            <div>
            
            <label>
                Submit Name:
                <input type="text" defaultValue={this.state.name} onChange={this.handleChange} />
            </label>
            {button}
            

            
            
            <h8>The Name Tag:</h8> {nameTag}

            <Greeting isLoggedIn={isLoggedIn} />
            
            {button}
            </div>
        );
    }  
}



export default NewScanner;
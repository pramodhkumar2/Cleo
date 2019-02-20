import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  constructor(){
    super()
      // this.result=[]
    }

  componentDidMount(){
      this.getUserInfo()
  }

  getUserInfo(){
    fetch('https://api-ssl.bitly.com/v4/user?access_token=09957d150f25858794e5ff2b3f64ea8a44ea3b3d')
      .then(function(data){
          console.log(data);
      })
  }

  render() {





    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

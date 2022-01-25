import './App.css';
import React, { Component } from 'react';
import Number from './Number';

class App extends Component {

  constructor(props) {
    console.log("app constructor");
    super(props);
  }

  render() {
    console.log("app render");
    return (
      <div className="App">
        <Number></Number>
      </div>
    );
  };
}  

export default App;

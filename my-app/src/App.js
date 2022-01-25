import './App.css';
import React, { Component } from 'react';
import Number from './Number';
import Iterate from './Iterate';

class App extends Component {

  constructor(props) {
    console.log("app constructor");
    super(props);
  }

  render() {
    console.log("app render");
    return (
      <div className="App">
        <Number digit="5"></Number>
        <Iterate></Iterate>
      </div>
    );
  };
}  

export default App;

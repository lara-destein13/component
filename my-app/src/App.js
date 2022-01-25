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
    const array = ["grape", "orange", "banana"];
    return (
      <div className="App">
        <Number digit="5"></Number>
        <Iterate array={array}></Iterate>
      </div>
    );
  };
}  

export default App;

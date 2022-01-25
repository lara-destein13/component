import './App.css';
import React, { Component } from 'react';
import Number from './Number';
import Iterate from './Iterate';
import Text from './Text';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const array = ["grape", "orange", "banana"];
    return (
      <div className="App">
        <Number digit="5"></Number>
        <Iterate array={array}></Iterate>
        <Text string="Hello World"></Text>
      </div>
    );
  };
}  

export default App;

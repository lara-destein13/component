import React, { Component } from 'react';
import './Number.css';

class Number extends Component {
  //-----------------------------------------------------------------------------------------------
  // constructor
  //-----------------------------------------------------------------------------------------------
  constructor(props) {
    super(props);
    console.log(constructor);
  }

  //-----------------------------------------------------------------------------------------------
  // render
  //-----------------------------------------------------------------------------------------------
  render() {

    return (
        <div className="Number">Hello</div>
    );
  }
};

export default Number;
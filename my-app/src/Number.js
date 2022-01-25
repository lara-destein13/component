import React, { Component } from 'react';
import './Number.css';

class Number extends Component {
  //-----------------------------------------------------------------------------------------------
  // constructor
  //-----------------------------------------------------------------------------------------------
  constructor(props) {
    super(props);
    console.log(JSON.stringify(props));
  }

  //-----------------------------------------------------------------------------------------------
  // render
  //-----------------------------------------------------------------------------------------------
  render() {

    return (
        <div className="Number">{this.props.digit}</div>
    );
  }
};

export default Number;
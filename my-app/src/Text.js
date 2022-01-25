import React, { Component } from 'react';
import './Text.css';


class Text extends Component {
    constructor(props) {
        super(props);
    }

    render() {
         return (
            <div className="text">{this.props.string}</div>
        );
    }    
};


export default Text;


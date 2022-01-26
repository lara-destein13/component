import React, { Component } from 'react';
import './Text.css';


class Text extends Component {
    constructor(props) {
        super(props);
    }

    clickHandler() {
        console.log("something got clicked");
    }

    render() {
         return (
            <div className="text">
                <button onClick = {this.clickHandler}>submit</button>
            </div>
        );
    }    
};


export default Text;




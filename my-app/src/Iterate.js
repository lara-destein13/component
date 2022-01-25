import React, { Component } from 'react';
import './Iterate.css';


class Iterate extends Component {
    constructor(props) {
        super(props);
        console.log(JSON.stringify(props));
    }


    renderString(takeAString) {
        return(
            <div>{takeAString}</div>
        );
    }

    render() {
        const props = this.props;
        const array = props.array;
    
        return (
            <div>
                {array.map((str) => this.renderString(str))}
            </div>
        );
    }    
};

export default Iterate;
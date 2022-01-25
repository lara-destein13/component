import React, { Component } from 'react';
import './Iterate.css';


class Iterate extends Component {
    constructor(props) {
        super(props);
        console.log(JSON.stringify(props));
    }


render() {
    return (
        <div>Iterate</div>
    );
}
};

export default Iterate;
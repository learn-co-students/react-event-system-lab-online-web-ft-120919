// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

    handleKeyUp = (e) => {
        console.log("Entering password...")
    }

    render () {
        return (
            <input type="password" onKeyUp={this.handleKeyUp}></input>
        )
    }
}

export default Keypad;
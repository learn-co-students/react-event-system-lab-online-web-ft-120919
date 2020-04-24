import React, { Component } from 'react';

class Keypad extends Component {

    handleKeyUp = (e) => {
        console.log("Entering password...")
    }//handleKeyUp

    render () {
        return (
            <input type="password" onKeyUp={this.handleKeyUp}></input>
        )//return
    }//render
}//class

export default Keypad;

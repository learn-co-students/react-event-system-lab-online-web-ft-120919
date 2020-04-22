import React, { Component } from 'react';
export default class Keypad extends Component {

    constructor(props) {
        super()
        this.state = {
            
        }
    }
    handleKeyUp = () => {
        console.log('Entering password...')
    }

    render() {
        return ( <div><input type="password"
                             onKeyUp={this.handleKeyUp} /> </div>
        )
    }
}
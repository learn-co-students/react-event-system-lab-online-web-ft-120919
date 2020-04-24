import React, { Component } from 'react';

class EyesOnMe extends Component {

    handleFocus = (event) => {
        console.log("Good!")
    }

    handleBlur = (event) => {
        console.log("Hey! Eyes on me!")
    }

    render () {
        return (
            <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
        )//return
    }//render
}//class

export default EyesOnMe;
import React, { Component } from 'react';
export default class EyesOnMe extends Component {

    constructor(props) {
        super()
        this.state = {
        }
    }

    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }
    handleFocus = () => {
        console.log('Good!')
    }

    render() {
        return ( <div><button type="password"
                             onFocus={this.handleFocus}
                             onBlur={this.handleBlur} /> </div>
        )
    }
}
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  handleOnBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  handleOnFocus = () => {
    console.log('Good!')
  }

  render() {
    return (
      <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}></button>
    )
  }
}

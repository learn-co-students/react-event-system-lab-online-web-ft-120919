import React, { Component } from 'react';

export default class EyeOnMe extends Component {

  constructor() {
    super()
  }


  compliment = () => {
    console.log('Good!')
  }


  print = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {

    return (
      <button onFocus={this.compliment} onBlur={this.print}>Enter</button>
    )
  }

}

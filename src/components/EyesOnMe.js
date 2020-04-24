import React from 'react'

export default class EyesOnMe extends React.Component{

    onBlur = () => console.log('Hey! Eyes on me!')

    onFocus = () => console.log('Good!')

    render(){
        return(
            <div>
                <button onFocus={this.onFocus} 
                onBlur={this.onBlur}>
                Eyes on me, please!
                </button>
            </div>
        )
    }
}
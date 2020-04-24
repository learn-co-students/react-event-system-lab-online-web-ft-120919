import React from 'react';

 class Keypad extends React.Component{
    
    handleKeyUp = () => {
        console.log('Entering password...')
    }

    render(){
        return(
            <div>
                <input onKeyUp={this.handleKeyUp} type="password"></input>
            </div>
        )
    }
}

export default Keypad
import React, { Component } from 'react'

class Welcome extends Component{
    constructor(){
        super();
        this.state = {
            message: 'Welcom visitor bool'
        }

    }

    changeMessage(){
        this.setState({
            message: "Thaks"
        })
    }


    render(){
        const {name} = this.props;
        return (
        <div>
            <h1>
                { this.state.message }
                Bakugou is { name }
            </h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>

        </div>
        )
    }
}

export default Welcome;
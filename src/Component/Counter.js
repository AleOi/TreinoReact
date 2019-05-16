import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
         count: 0
      }
    }

    increment() {
        // Sempre usar setState
        // this.state.count = this.state.count + 1;
        console.log('Maldito')
        this.setState({
            count: this.state.count + 1
        })

    }

    render() {
        return (
        <div>
            <div>Count - {this.state.count}</div>
            <button onClick = {() => this.increment()}> Increment</button>
        </div>
        )
    }
}

export default Counter

// Colocar rcc ou rce para criar tudo muito rápido
// rcons criar contrutor de forma rápida
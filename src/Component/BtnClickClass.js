import React, { Component } from 'react'

export class BtnClickClass extends Component {

    constructor(props) {
      super(props)

      this.state = {
         message: "Hello"
      }

      this.Click2 = this.Click2.bind(this)
    }


    Click(){
        console.log("Testando escrita com log e click")
    }

    Click2(){
        this.setState({
            message: "Bye"
        })
    }

    Click3 = () => {
        this.setState({
            message: "Bye"
        })
    }


    render() {
    return (
      <div>
        <button onClick = { this.Click }> Clique nessa classe</button>
        <h1>{ this.state.message }</h1>
        {/* <button onClick = { this.Click2.bind(this) }> Clique que mudaremos a frase</button> */}
        {/* <button onClick = { () => {this.Click2()} }> Clique que mudaremos a frase</button> */}
        {/* <button onClick = { this.Click2 }> Clique que mudaremos a frase</button> */}
        <button onClick = { this.Click3 }> Clique que mudaremos a frase</button>
        </div>
    )
  }
}

export default BtnClickClass

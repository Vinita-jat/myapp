import React, { Component } from 'react'

export default class Didupdate extends Component {
  constructor()
  {
    super()
    this.state={
        counter:0
    }
  }
 
  render() {
    return (
      <div>
        <h1>Component Did Update</h1>
        <h2>counter:{this.state.counter}</h2>
        <Child data={this.state.counter}/>
        <button onClick={()=>this.setState({counter:this.state.counter+1})}>Update Counter</button>
      </div>
    )
  }
}

 class Child extends Component {
    constructor()
    {
      super()
      this.state={
          counter:0
      }
    }
    componentDidUpdate(pP,pS,sS)
    {
      console.log("Method Call",pP,this.props.data)
    }
    render() {
      return (
        <div>
          <h1>Child Component</h1>
          <h2>counter:{this.props.data}</h2>

        </div>
      )
    }
  }



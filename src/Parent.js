import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
constructor()
{
    super()
    this.state={
        number:0
    }
}
  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <Child num={this.state.number}/>
        <button onClick={()=>this.setState({number:this.state.number+1})}>Update</button>
      </div>
    )
  }
}

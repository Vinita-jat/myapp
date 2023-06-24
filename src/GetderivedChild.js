import React, { Component } from 'react'

export default class GetderivedChild extends Component {
    constructor()
 {
    super()
    this.state={
        qty:1
    }
 }
  
static getDerivedStateFromProps(props,state)
{
    console.log(props,state)
    return {
        qty:props.cnt*10
    }
}
  render() {
    return (
      <div>
        <h2>Get Derived Child Component</h2>
        <h3>Quantity: {this.state.qty}</h3>
      </div>
    )
  }
}
import React, { Component } from 'react'
import GetderivedChild from './GetderivedChild'

export default class Getderivedprops extends Component {
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
        <h1>Get Derived State from Props</h1>
        <h2>Counter:{this.state.counter}</h2>
        <GetderivedChild cnt={this.state.counter}/>
        <button onClick={()=>this.setState({counter:this.state.counter+1})}>Update Counter</button>
      </div>
    )
  }
}
import React, { Component } from 'react'
import Employee from './Employee'
import Didupdate from './Didupdate'
import Getderivedprops from './Getderivedprops'
import Parent from './Parent'
import Home from './Home'

export default class App extends Component {
  constructor()
  {
    super()
    this.state={
      bool:true
    }
    console.warn("Constuctor")
  }
  componentDidMount()
  {
    console.warn("componentDidMountnpm  ")
  }
  render() {
    console.warn("render")
    return (
      <div>
       {
        this.state.bool?<Employee/>:null
       }
       <button onClick={()=>{this.setState({bool:!this.state.bool})}}>Toggle</button>
       {/*<Didupdate/>
       <Getderivedprops/>
       <Parent/>*/}
       <Home/>
      </div>
    )
  }
}

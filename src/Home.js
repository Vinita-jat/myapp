import React, { Component } from 'react'

export default class Home extends Component {
 constructor()
 {
    super()
    this.state={
        price:2
    }
 }
shouldComponentUpdate(prestate)
{
  if(prestate.price==this.state.price)
  {
    return false
  }
  return true
  if(this.state.price>50)
  {
    return false
  }
  return true
}
  render() {
    console.log("Render Method")
    return (
      <div>
        <div style={{backgroundColor:"pink",color:"purple"}}>
            <h1>Should Componnt Update Method{this.state.price}</h1>
            <button onClick={()=>this.setState({price:this.state.price*5})}>Update 
            </button>
        </div>
      </div>
    )
  }
}

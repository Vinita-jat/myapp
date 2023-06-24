import React, { Component } from 'react'

export default class Child extends Component {
constructor()
{
    super()
    this.state={
        data:0
    }
}
componentDidUpdate(props,state,snapshot)
{
    console.log(props,state,snapshot)
}
getSnapshotBeforeUpdate(preprop,prestate)
{
    console.log(preprop)
    return prestate.data*5
}
  render() {
    return (
      <div>
        {/*<h2>Child Component {this.props.num}</h2>*/}
        <h2>Child Component {this.state.data}</h2>
        <button onClick={()=>this.setState({data:this.state.data+1})}>Update Data</button>
      </div>
    )
  }
}

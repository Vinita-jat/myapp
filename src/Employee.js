import React, { Component } from 'react'

export default class Employee extends Component {
  componentWillUnmount()
  {
    console.warn("componentWillUnmount")
  }
  render() {
    return (
      <div>
        <h1>Employee Component</h1>
      </div>
    )
  }
}

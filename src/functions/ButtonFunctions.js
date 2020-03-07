import React from 'react'

function menuClickHandler() {
  console.log(this)
  console.log(this.state.isOpened)
  const currentState = this.state.isOpened;
  this.setState({isOpened: !currentState})
  console.log(this.state.isOpened)
}

export default menuClickHandler
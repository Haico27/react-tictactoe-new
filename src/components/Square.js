import React, { PureComponent } from 'react'
import './Square.sass'

class Square extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      value: null,
    }
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X' })}>
        {this.state.value}
      </button>
    );
  }
}

export default Square

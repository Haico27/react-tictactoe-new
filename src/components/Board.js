import React, { PureComponent } from 'react'
import Square from './Square'
import './Board.sass'

class Board extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true, // sets player X plays the first move by default
    }
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
  }

  handleClick(i) {
  const squares = this.state.squares.slice()
  squares[i] = this.state.xIsNext ? 'X' : 'O'; // if xIsNext is true, X plays; if false O plays
  this.setState({
    squares: squares,
    xIsNext: !this.state.xIsNext, //changes the state of xIsNext to the opposite
  })
}

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O'); //shows whether its the turn of player X or player O
  
    return (
      <div className="board">
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board

import React, { PureComponent } from 'react'
import Square from './Square'
import './Board.sass'

class Board extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  renderSquare(i) {
    return <Square value={i} />;
  }
  
  render() {
    const status = 'Next player: X';
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

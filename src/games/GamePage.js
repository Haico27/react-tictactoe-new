import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchGames from '../actions/games/fetch'
import Board from '../components/Board'
import Title from '../components/Title'

export class GamePage extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    this.props.fetchGames()
  }

  render() {
    const { title } = this.props

    return(
      <div className="game page">
        <Title content={ title || 'Loading...' } />
      </div>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ games }, { params }) => {
  const game = games.reduce((prev, next) => {
    if (next._id === params.gameId) {
      return next
    }
    return prev
  }, {})

  return {
    ...game
  }
}

export default connect(mapStateToProps, { fetchGames })(GamePage)

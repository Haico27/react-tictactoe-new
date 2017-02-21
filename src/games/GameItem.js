// src/games/GameItem.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './GameItem.sass'
import RaisedButton from 'material-ui/RaisedButton'
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset'
import {blue500} from 'material-ui/styles/colors'
import { history } from '../store'
// import TicTacToe from '../images/tictactoe.jpg'

const iconStyles = {
  marginLeft: 30
};

const buttonStyle = {
  float: 'right',
  marginLeft: '2rem',
}

export class GameItem extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }

  gameId() {
    history.push('games/:gameId')
  }

  render() {
    const { _id, title, } = this.props

    return(
      <article className="game">
        <header>
          <h1>
            <center>{ title }</center>
          </h1>
        </header>
        <main>
          <center><HardwareVideogameAsset style={iconStyles} color={blue500} />
          <Link to={`/games/${_id}`}>Play!</Link></center>
        </main>
        <footer>
        </footer>
      </article>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })


export default connect(mapStateToProps)(GameItem)

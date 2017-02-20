// src/games/GameItem.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './GameItem.sass'
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset'
import {blue500} from 'material-ui/styles/colors'

const iconStyles = {
  marginLeft: 30
};

export class GameItem extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }

  render() {
    const { _id, title, } = this.props

    return(
      <article className="game">
        <header>
          <h1>
            { title }
          </h1>
        </header>
        <main>
          <center><Link to={`/games/${_id}`}>Play!</Link></center>
        </main>
        <footer>
          <HardwareVideogameAsset style={iconStyles} color={blue500} />
        </footer>
      </article>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })


export default connect(mapStateToProps)(GameItem)

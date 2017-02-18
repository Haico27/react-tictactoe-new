// src/games/GameItem.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './GameItem.sass'

export class GameItem extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,

  }



  render() {
    const { _id, title, summary, vegan, vegetarian, pescatarian, photo } = this.props

    return(
      <article className="game">
        <header>
          <div className="cover" style={{ backgroundImage: `url(${photo})` }} />
          <h1>
            <Link to={`/games/${_id}`}>{ title }</Link>
          </h1>
          <ul className="categories">
            { vegan && <li title="vegan">🌾</li> }
            { !vegan && vegetarian && <li title="vegetarian">🥕</li> }
            { !vegetarian && pescatarian && <li title="pescatarian">🐟</li> }
          </ul>
        </header>
        <main>
          <p>{ summary }</p>
        </main>
        <footer>
        </footer>
      </article>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })
  

export default connect(mapStateToProps)(GameItem)

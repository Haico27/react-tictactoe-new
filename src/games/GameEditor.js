import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/src/sass/medium-editor.scss'
import CREATE_GAME  from '../actions/games/create-game'
import './GameEditor.sass'
import saveGame from '../actions/games/save-game'

// const TYPES = [
//   'Beginner',
//   'Normal',
//   'Pro',
// ]

class GameEditor extends PureComponent {
  constructor(props) {
    super()

    const { title } = props

    this.state = {
      title,
      // beginner,
      // normal,
      // pro,
    }
  }

  updateTitle(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      title: this.refs.title.value
    })
  }

  // setType(event) {
  //   this.setState({
  //     beginner: event.target.value === 'Beginner',
  //     normal: event.target.value === 'Normal',
  //     pro: event.target.value === 'Pro'
  //   })
  // }

  saveGame() {
    const {
      title,
      // beginner,
      // normal,
      // pro,
    } = this.state

    const game = {
      title,
      // beginner,
      // normal,
      // pro,
    }

this.props.CREATE_GAME(game)

    console.log(game)
  }

  render() {
    return(
      <div className="editor">
        <input
          type="text"
          ref="title"
          className="title"
          placeholder="Title"
          defaultValue={this.state.title}
          onChange={this.updateTitle.bind(this)}
          onKeyDown={this.updateTitle.bind(this)} />

        <div className="actions">
          <center><button className="primary" onClick={this.saveGame.bind(this)}>Create a new Game</button></center>
        </div>
      </div>
    )
  }
}

export default connect(null, { CREATE_GAME, saveGame }) (GameEditor)

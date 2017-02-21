import API from '../../middleware/api'
const api = new API()
const games = api.service('games')
export const GAME_REMOVED = 'GAME_REMOVED'

export default (deleteGame) => {
  return (dispatch) => {
    console.log('newGame: ', deleteGame)
    api.app.authenticate()
    .then(() => {
      games.remove(deleteGame)
        .then((response) => {
          console.log('game removed', response)
        }).catch((error) => {
          console.error('Error', error);
        })
      }).catch((error) => {
        console.error(error)
    })
    history.push('/')
  }
  return {
    type: GAME_REMOVED
  }
}

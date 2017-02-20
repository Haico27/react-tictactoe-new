import API from '../../middleware/api'
const api = new API()
const games = api.service('games')
export const GAME_CREATED = 'GAME_CREATED'

export default (newGame) => {
  return (dispatch) => {
    console.log('newGame: ', newGame)
    api.app.authenticate()
    .then(() => {
      games.create(newGame)
        .then((response) => {
          console.log('game created', response)
        }).catch((error) => {
          console.error('Error', error);
        })
      }).catch((error) => {
        console.error(error)
    })
  }
  return {
    type: GAME_CREATED
  }
}

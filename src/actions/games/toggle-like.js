import API from '../../middleware/api'
const api = new API()
const games = api.service('games')

export default (game, user) => {
  const liked = game.likedBy.filter((like) => (like === user._id)).length > 0

  api.app.authenticate()
    .then(() => {
      games.patch(game._id, { like: !liked })
    })
    .catch((error) => {
      console.error(error)
      // e.g. redirect to sign in!
    })

  return { type: 'LIKED_GAME' }
}

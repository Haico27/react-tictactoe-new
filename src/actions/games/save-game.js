export const saveGame = 'saveGame'

export default ( newGame ) => {
  return {
    type: saveGame,
    payload: newGame
  }
}

import chai, { expect } from 'chai'
import toggleLike, { TOGGLE_LIKE } from './toggle-like'

describe('toggleLike(gameId)', () => {
  const gameId = 4
  const { type, payload } = toggleLike(gameId)

  it('returns a type', () => {
    expect(type).to.eq(TOGGLE_LIKE)
  })

  it('returns a payload with the gameId', () => {
    expect(payload).to.eq(gameId)
  })
})

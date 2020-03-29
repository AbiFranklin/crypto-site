const crypto = require('crypto')
const Roulette = require('../models/roulette')

const numValue = str => {
  let hash = 0
  if (str.length === 0) return hash
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  return hash
}

// Server seed is kept secret. Regenerated every 24 hours, the previous seed used is then exposed to users.
// Public seed is shown to public. Regenerated every 24 hours along with server seed.
// currentRound is incremented on every roll.

const getRoll = () => {
  const rlt = () => {
    Roulette.findOneAndUpdate({}, { $inc: { currentRound: 1 } }, { new: true })
      .then(data => {
        return data
      })
      .catch(err => console.error(err))
  }

  const digest = crypto
    .createHash('sha256')
    .update(`${rlt.serverSeed}-${rlt.publicSeed}-${rlt.currentRound}`)
    .digest('base64')
    .substr(7, 16)

  const num = numValue(digest)

  return {
    round: rlt.currentRound,
    ts: Date.now(), // Current ts
    next: Date.now() + 20000 + 6000, // Next roll is now + 20s countdown timer and 6s roll timer.
    // prevRolls: [ ...rlt.previousRolls ],
    winner: Math.abs(num) % 15,
    timer: 20000,
    animation: 6000
  }
}

module.exports = {
  getRoll
}

const mongoose = require('mongoose')

const rouletteBetSchema = mongoose.Schema(
  {
    uuid: { type: String, required: true },
    roundId: { type: Number, required: true },
    betAmount: { type: Number, required: true },
    betColor: { type: String, enum: [ 'Red', 'Green', 'Black' ] }
  },
  { versionKey: false }
)

module.exports = mongoose.model('RouletteBet', rouletteBetSchema)

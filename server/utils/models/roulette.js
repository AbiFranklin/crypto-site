const mongoose = require('mongoose')

const rouletteSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    previousRolls: { type: [ String ], required: true, maxlength: 100 },
    currentRound: { type: Number, required: true },
    publicSeed: String,
    serverSeed: String
  },
  { versionKey: false }
)

module.exports = mongoose.model('Roulette', rouletteSchema)

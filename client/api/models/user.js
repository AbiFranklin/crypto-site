const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    uuid: { type: String, required: true },
    steam: {
      steamid: { type: String, required: true },
      communityvisibilitystate: { type: Number, required: true },
      personaname: { type: String, required: true },
      profileurl: { type: String, required: true },
      avatar: { type: String, required: true },
      avatarmedium: { type: String, required: true },
      avatarfull: { type: String, required: true },
      realname: { type: String, required: true }
    },
    user: {
      displayName: String,
      balance: { type: Number, required: true, default: 0 },
      canWithdraw: { type: Boolean, required: true, default: true },
      isLocked: { type: Boolean, required: true, default: false },
      tradeUrl: { type: String, default: '' },
      userType: { type: String, required: true, enum: [ 'Admin', 'Moderator', 'User' ], default: 'User' },
      rouletteRoundHistory: [ Number ],
      xp: {
        xp: { type: Number, required: true },
        level: { type: Number, required: true }
      },
      stats: {
        deposited: { type: Number, default: 0 },
        withdrawn: { type: Number, default: 0 },
        totalBet: { type: Number, default: 0 }
      },
      tickets: {
        amount: Number,
        ids: [ String ]
      }
    }
  },
  { versionKey: false }
)

module.exports = mongoose.model('User', userSchema)

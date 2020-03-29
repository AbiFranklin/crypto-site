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
    site: {
      displayName: String,
      balance: Number,
      canWithdraw: Boolean,
      isLocked: Boolean,
      xp: {
        xp: Number,
        level: Number
      },
      stats: {
        deposited: 0,
        widthdrawn: 0,
        wagered: 0
      },
      tickets: {
        amount: 0,
        ids: [ String ]
      }
    }
  },
  { versionKey: false }
)

module.exports = mongoose.model('User', userSchema)

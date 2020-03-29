const SteamStrategy = require('passport-steam').Strategy
const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const User = require('../models/user')

module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then(user => {
        done(null, user)
      })
      .catch(err => {
        console.log(err)
        done(err, null)
      })
  })

  passport.use(
    new SteamStrategy(
      {
        returnURL: 'https://localhost:3000/auth/steam/callback',
        realm: 'https://localhost:3000/',
        apiKey: process.env.REACT_APP_STEAM_API_KEY
      },
      (identifier, profile, done) => {
        User.findOne({ 'steam.steamid': profile._json.steamid })
          .exec()
          .then(currentUser => {
            if (currentUser) {
              return done(null, currentUser)
            } else {
              new User({
                _id: mongoose.Types.ObjectId(),
                uuid: uuidv4(),
                steam: {
                  steamid: profile._json.steamid,
                  communityvisibilitystate: profile._json.communityvisibilitystate,
                  personaname: profile._json.personaname,
                  profileurl: profile._json.profileurl,
                  avatar: profile._json.avatar,
                  avatarmedium: profile._json.avatarmedium,
                  avatarfull: profile._json.avatarfull,
                  realname: profile._json.realname
                },
                site: {
                  displayName: profile._json.personaname,
                  balance: 0,
                  canWithdraw: true,
                  isLocked: false,
                  xp: {
                    xp: 0,
                    level: 1
                  },
                  stats: {
                    deposited: 0,
                    widthdrawn: 0,
                    wagered: 0
                  },
                  tickets: {
                    amount: 0,
                    ids: []
                  }
                }
              })
                .save()
                .then(newUser => {
                  console.log('New user saved!')
                  return done(null, newUser)
                })
                .catch(err => {
                  console.error(err)
                  return done(err, null)
                })
            }
          })
      }
    )
  )
}

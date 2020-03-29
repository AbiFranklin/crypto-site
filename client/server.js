const fs = require('fs')
const httpsOptions = {
  key: fs.readFileSync('./ssl/d2app-key.pem'),
  cert: fs.readFileSync('./ssl/d2app-cert.pem')
}
const app = require('express')()
const server = require('https').createServer(httpsOptions, app)
const next = require('next')
const session = require('express-session')
const passport = require('passport')
const mongoose = require('mongoose')
const cors = require('cors')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const User = require('./api/models/user')

nextApp.prepare().then(() => {
  mongoose.connect(
    process.env.REACT_APP_MONGODB_URI,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
    },
    () => console.log('> Connected to MongoDB')
  )

  require('./api/strategy')(passport)

  app.use(cors())
  app.use(
    session({
      name: 'do_not_share_this_with_anyone',
      secret: process.env.REACT_APP_SESSION_SECRET,
      resave: true,
      saveUninitialized: false,
      cookie: { secure: true },
      maxAge: 24 * 60 * 60 * 1000
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

  app.get('/auth/steam', passport.authenticate('steam'), (req, res) => {})

  app.get(
    '/auth/steam/callback',
    passport.authenticate('steam', { failureRedirect: '/login', session: true }),
    (req, res) => {
      res.redirect('/')
    }
  )

  app.get('/meta/currentUser', async (req, res) => {
    if (req.user) {
      User.findOne({ 'steam.steamid': req.user.steam.steamid })
        .exec()
        .then(user => {
          if (user) {
            return res.json({ user: user })
          }
        })
    } else {
      return res.json({ user: null })
    }
  })

  app.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  app.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, () => console.log(`> Ready on https://localhost:${port}/`))
})

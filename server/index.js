require('dotenv').config()
const fs = require('fs')
const httpsOptions = {
  key: fs.readFileSync('./ssl/d2app-key.pem'),
  cert: fs.readFileSync('./ssl/d2app-cert.pem')
}
const express = require('express')
const app = express()
const server = require('https').createServer(httpsOptions, app)
const io = require('socket.io')(server)
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const mongoose = require('mongoose')
const port = process.env.PORT || 3001

const { getRoll } = require('./utils/roulette')

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
})

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(__dirname + '../client/.next/static'))

io.on('connection', socket => {
  const usersOnline = Object.keys(io.sockets.connected).length

  io.emit('usersOnline', usersOnline)

  setInterval(() => {
    io.emit('rouletteRoll', getRoll())
  }, 20000)

  socket.on('disconnect', () => {
    io.removeAllListeners()
    io.emit('usersOnline', usersOnline)
  })
})

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello there!'
  })
})

app.use('/api/auth/get', require('./api/routes/auth'))

app.get('*', (req, res) => {
  res.status(400).json({
    error: {
      stauts: 400,
      message: `${req.path} is not a valid route.`
    }
  })
})

server.listen(port, () => console.log(`Server listening on http://localhost:${port}`))

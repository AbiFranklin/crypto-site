const User = require('../models/user')

exports.auth_get_me = async (req, res, next) => {
  const { SteamID } = req.params

  if (!SteamID || !SteamID.match(/7656119\d{10}/g))
    return res.status(400).json({ data: { message: 'Invalid or missing Steam ID 64' } })

  User.find({ 'steam.steamid': SteamID })
    .exec()
    .then(user => {
      if (!user) return res.status(400).json({ data: { message: 'No user.' } })

      return res.status(200).json(user)
    })
    .catch(err => {
      return res.status(500).json({ data: { message: err } })
    })
}

require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')

const withImages = require('next-images')
const withFonts = require('next-fonts')

module.exports = withFonts(
  withImages({
    webpack: (config, { isServer }) => {
      config.plugins = config.plugins || []
      config.plugins = [
        ...config.plugins,

        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true
        })
      ]
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }

      return config
    }
  })
)

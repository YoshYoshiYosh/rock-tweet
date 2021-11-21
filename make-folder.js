let fs = require('fs')
const { artists } = require('./artists')

let names = artists.map (artist => artist.name.toLowerCase().replace(/ /g, '_'))

names.forEach(name => {
  if (!fs.existsSync(`./images/${name}`)) {
      fs.mkdirSync(`./images/${name}`)
  }
})
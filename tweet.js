const Twitter = require('twitter')
let fs = require('fs')
const { artists } = require('./artists')
require('dotenv').config()

let names = artists.map (artist => artist.name.toLowerCase().replace(/ /g, '_'))

names.forEach(name => {
  if (!fs.existsSync(`./images/${name}`)) {
      fs.mkdirSync(`./images/${name}`)
  }
})

let twitter = new Twitter({
    consumer_key:    process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token_key:    process.env.ACCESS_TOKEN,
    access_token_secret:    process.env.ACCESS_TOKEN_SECRET,
})

async function getImage(artistName) {
    const folderName = artistName.toLowerCase().replace(/ /g, '_')
    const files = await fs.promises.readdir(`./images/${folderName}`, (err, files) => {
        if (err) reject(err)
        return files
    })
    if (files.length == 0) return false

    const imageFileIndex = Math.floor( Math.random() * files.length )

    return fs.readFileSync(`./images/${folderName}/${files[imageFileIndex]}`)
}

let interval = 60000

const sleep = (timer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, timer)
    })
}

(async function main() {
    while(true) {
        const index = Math.floor( Math.random() * artists.length )
        const now = new Date()

        const selectedArtistName = artists[index].name

        const imageData = await getImage(selectedArtistName)
        if (!imageData) continue

        const media_id = (await twitter.post('media/upload', { media: imageData })).media_id_string

        await twitter.post('statuses/update', 
            { status: `API TEST \n${selectedArtistName} \n${now}`, media_ids: media_id },
            (error, tweet, response) => {
              if(error) {
                  console.log(error)
              } else {
                  console.log(tweet)
              }
        })
        await sleep(interval)
        }
}) ();

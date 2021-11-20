const Twitter = require('twitter')
let fs = require('fs')
require('dotenv').config()

let twitter = new Twitter({
    consumer_key:    process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token_key:    process.env.ACCESS_TOKEN,
    access_token_secret:    process.env.ACCESS_TOKEN_SECRET,
})

let artists = [
    'Eric Clapton',
    'Paul Gilbert',
    'Angus Young',
    'Jeff Beck',
    'Steve Vai'
]

async function getImage(artistName) {
    const folderName = artistName.toLowerCase().replace(' ', '_')
    const files = await fs.promises.readdir(`./images/${folderName}`, (err, files) => {
        if (err) reject(err)
        return files
    })
    const imageFileIndex = Math.floor( Math.random() * files.length )
    console.log('---')
    console.log('folderName')
    console.log(folderName)
    console.log('file')
    console.log(files[imageFileIndex])
    console.log('---')

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
        const index = Math.floor( Math.random() * 4 )
        const now = new Date()

        const selectedArtistName = artists[index]

        const imageData = await getImage(selectedArtistName)

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

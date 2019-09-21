const Twitter = require('twitter')
let fs = require('fs')
let now;

// すでに削除されたkeyのため、直接記述
let twitter = new Twitter({
    consumer_key: 'LBwxBrvUw28Kb5yMFFJgzXaTr',
    consumer_secret: 'KVWCgi5cwnTz61n9m5Vr2Xhn9QMbFYnbV7ULz0RwgztsHTwY4W',
    access_token_key: '1031565711741673472-shyrK3f9EH2wTWo4Wk9Dk78RiatLZI',
    access_token_secret: 'GKDsOjkVVZlC0wuhhb7aVx5dMITOoo5cQGUYwV5RAXPbX'
})

let num;

let stars = [
    {star_name: 'Eric Clapton', media_id:'1066713316251230209'},
    {star_name: 'Paul Gilbert', media_id:'1066713318042173442'},
    {star_name: 'Angus Young ', media_id:'1066713319170486272'},
    {star_name: 'Jeff Beck'   , media_id:'1066713318801342464'},
    {star_name: 'Steve Vai'   , media_id:'1066713317522137091'},
]

let interval = 60000

const sleep = (timer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, timer)
    })
}

(async function main() {
    
    while(true){
        num = Math.floor( Math.random() * 4 );
        console.log(num)
        now = new Date()
        twitter.post('statuses/update', 
            {status: `API TEST \n${stars[num].star_name} \n${now}`, media_ids: `${stars[num].media_id}`}, (error, tweet, response) => {
                if(error) {
                    console.log(error)
                } else {
                    console.log(tweet)
                }
            })
            await sleep(interval)
        }
}) ();

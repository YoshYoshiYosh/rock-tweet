const Twitter = require('twitter')
var fs = require('fs')

let twitter = new Twitter({
    consumer_key: 'LBwxBrvUw28Kb5yMFFJgzXaTr',
    consumer_secret: 'KVWCgi5cwnTz61n9m5Vr2Xhn9QMbFYnbV7ULz0RwgztsHTwY4W',
    access_token_key: '1031565711741673472-shyrK3f9EH2wTWo4Wk9Dk78RiatLZI',
    access_token_secret: 'GKDsOjkVVZlC0wuhhb7aVx5dMITOoo5cQGUYwV5RAXPbX'
})

// img_name
var img_eric  = fs.readFileSync('./Eric-Clapton-800-e1480223546324.jpg')
var img_paul  = fs.readFileSync('./paul.jpg')
var img_angus = fs.readFileSync('./AngusYoung.JPG')
var img_jeff  = fs.readFileSync('./jeff_beck_ronnie_scotts.jpg')
var img_steve = fs.readFileSync('./steve_vai.jpg')
// var img_eric = fs.readFileSync('./Eric-Clapton-800-e1480223546324.jpg')
// var img_eric = fs.readFileSync('./Eric-Clapton-800-e1480223546324.jpg')
// var img_eric = fs.readFileSync('./Eric-Clapton-800-e1480223546324.jpg')
// var img_eric = fs.readFileSync('./Eric-Clapton-800-e1480223546324.jpg')
// var img_eric = fs.readFileSync('./Eric-Clapton-800-e1480223546324.jpg')

// media_name
var media_eric   = {'media': img_eric   }
var media_paul   = {'media': img_paul   }
var media_angus  = {'media': img_angus  }
var media_jeff   = {'media': img_jeff   }
var media_steve  = {'media': img_steve  }
// var media_eric   = {'media': img_eric   }
// var media_eric   = {'media': img_eric   }
// var media_eric   = {'media': img_eric   }
// var media_eric   = {'media': img_eric   }
// var media_eric   = {'media': img_eric   }

let arrayMedia = [media_eric, media_paul, media_angus, media_jeff, media_steve]

// メディアIDゲット用
for(var i = 0; i < arrayMedia.length; i++) {
    
    twitter.post('media/upload', arrayMedia[i], (err, media, response) => {
        if(err) {
            return console.log(err)
        } else {
            return console.log(media)
        }
    })

}

// twitter.post('media/upload', media, (err, media, response) => {
//     if(err) {
//         return console.log(err)
//     } else {
//         return console.log(media)
//     }
// })

// let num;

// let stars = [
//     {star_name: 'Eric Clapton', media_id:'1066703275372597253'},
//     {star_name: 'Paul Gilbert', media_id:'1066703276387651584'},
//     {star_name: 'Angus Young ', media_id:'1066703276526120960'},
//     {star_name: 'Jeff Beck'   , media_id:'1066703277885026305'},
//     {star_name: 'Steve Vai'   , media_id:'1066703278279352321'},
//     // {star_name: '', media_id:''},
//     // {star_name: '', media_id:''},
//     // {star_name: '', media_id:''},
//     // {star_name: '', media_id:''},
//     // {star_name: '', media_id:''},
// ]

// while(true){

//     //numの値でスイッチする。0だったらエリッククラプトンみたいな感じで

//     num = Math.floor( Math.random() * 4 );
//     console.log(num)
//     twitter.post('statuses/update', 
//         {status: `${stars[num].star_name}`, media_ids: `${stars[num].media_id}`}, (error, tweet, response) => {
//             if(error) {
//                 return console.log(error)
//             } else {
//                 return console.log(tweet)
//             }
//         })
//     }


//     // 保管
//     // twitter.post('statuses/update', 
//     //     {status: 'Eric Clapton', media_ids: '1066688630159110146'}, (error, tweet, response) => {
//     //         if(error) {
//     //             return console.log(error)
//     //         } else {
//     //             return console.log(tweet)
//     //         }
//     //     })
// }


// twitter.post('media/upload', media, (err, media, response) => {
//     if(err) {
//         return console.log(err)
//     } else {
//         return console.log(media)
//     }
// })

// const apiKey = 'LBwxBrvUw28Kb5yMFFJgzXaTr'
// const apiSecret = 'KVWCgi5cwnTz61n9m5Vr2Xhn9QMbFYnbV7ULz0RwgztsHTwY4W'
// const accessToken = '1031565711741673472-shyrK3f9EH2wTWo4Wk9Dk78RiatLZI'
// const accessSecret = 'GKDsOjkVVZlC0wuhhb7aVx5dMITOoo5cQGUYwV5RAXPbX'
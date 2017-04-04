'use strict'

const config = require('../../config/config')
const paramters = require('./parameters')
const random = require('./random')
const twit = require('twit')

const T = new twit(config)

const favorite = () => {
  let params = paramters

  T.get('search/tweets', params, (err, data) => {
    let tweet = data.statuses
    // pick a random tweet
    let randomTweet = random(tweet)

    if(typeof randomTweet != 'undefined'){
      T.post('favorite/create', {id: randomTweet.id_str}, (err, response) => {
        console.log('SUCCESS: Favorite')
      })
    }
  })
}

module.exports = favorite
'use strict'

const config = require('../config/config')
const Twit = require('twit')

const T = new Twit(config)

// Import API functions
const favorite = require('./api/favorite');

console.log('FAVorite Bot is running')

const frequency = 1000 * 60 * 30

setInterval(favorite, frequency)
'use strict'

const config = require('../../config/config')

module.exports = {
  q: config.queryString,
  result_type: 'recent',
  lang: 'en'
}
// @flow
/* eslint-env mocha */

var setDayOfYear = require('./')
var moment = require('moment')

suite('setDayOfYear', function() {
  benchmark('date-fns', function() {
    return setDayOfYear(this.date, 150)
  })

  benchmark('Moment.js', function() {
    return this.moment.dayOfYear(150)
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

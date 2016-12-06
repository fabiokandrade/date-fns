// @flow
/* eslint-env mocha */

var subWeeks = require('./')
var moment = require('moment')

suite('subWeeks', function() {
  benchmark('date-fns', function() {
    return subWeeks(this.date, 8)
  })

  benchmark('Moment.js', function() {
    return this.moment.subtract(8, 'weeks')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

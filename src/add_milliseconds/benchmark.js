// @flow
/* eslint-env mocha */

var addMilliseconds = require('./')
var moment = require('moment')

suite('addMilliseconds', function() {
  benchmark('date-fns', function() {
    return addMilliseconds(this.date, 500)
  })

  benchmark('Moment.js', function() {
    return this.moment.add(500, 'milliseconds')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

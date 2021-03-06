const _ = require('underscore');
const Backbone = require('backbone');

const Monitor = function (collection) {
  _.extend(this, Backbone.Events);
  this.listenTo(collection, 'all', function (eventName) {
    console.log(eventName);
  });
};

module.exports = Monitor;

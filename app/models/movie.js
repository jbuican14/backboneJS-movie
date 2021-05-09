const Backbone = require('backbone');

const Movie = Backbone.Model.extend({
  // convert an Epoch timestamp to a Date object
  toShowTimeDate: function () {
    console.log('toShowTImeDate');
    const d = new Date(0);
    d.setUTCSeconds(this.get('showtime'));
    return d;
  },

  // show a Date in the locale timezone
  showtimeToString: function () {
    return this.toShowTimeDate().toLocaleString();
  },
});
module.exports = Movie;

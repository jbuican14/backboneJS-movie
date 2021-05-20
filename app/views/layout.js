const Backbone = require('backbone');
const _ = require('underscore');

const Layout = Backbone.View.extend({
  render: function () {
    this.$el.html(this.template());
    this.currentDetails.setElement(this.$('#details')).render();
    this.overview.setElement(this.$('#overview')).render();
    this.controls.setElement(this.$('#controls'));
    return this;
  },

  initialize: function (options) {
    this.overview = new MoviesList({
      collection: options.router.movies,
      router: options.router,
    });

    this.controls = new Controls({ collection: options.router.movies });
  },

  template: _.template(
    ' \
  <header> \
  <a href="#">Home</a>\
    <nav id="controls"> \
    <button id="by_title">By Title</button> \
    <button id="by_rating">By Rating</button> \
    <button id="by_showtime">By Showtime</button> \
    </nav>\
  </header>\
  <div id="overview"></div>\
  <div id="details"></div>\
  '
  ),
});

module.exports = Layout;

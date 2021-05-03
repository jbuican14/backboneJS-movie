const Backbone = require('backbone');
const _ = require('underscore');

// import the moviesList
const MoviesList = require('views/mobiesList');
const Layout = Backbone.extend({
  render: function () {
    this.$el.append(this.moviesList.render().el);
    return this;
  },

  initialize: function (options) {
    this.moviesList = new MoviesList({
      el: options.el,
      collection: options.collection,
      router: options.router,
    });
  },
});

// hide the view construction in the router
const instance;
Layout.getInstance = function (options) {
  if (!instance) {
    instance = new Layout({
      el: options.el,
      router: options.router,
      collection: options.router.movies,
    });
  }
  return instance;
};

module.exports = Layout;

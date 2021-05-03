const Backbone = require('backbone');
const _ = require('underscore');

// import the moviesList
const MoviesList = require('views/moviesList');
const DetailsView = require('views/details');
const ChoseView = require('views/chose');

const Layout = Backbone.View.extend({
  template: _.template(
    '           \
             <div id="overview">   \
             </div>                \
             <div id="details">    \
             </div>'
  ),

  render: function () {
    this.$el.html(this.template());
    this.currentDetails.setElement(this.$('#details')).render();
    this.overview.setElement(this.$('#overview')).render();

    return this;
  },

  setDetails: function (movie) {
    if (this.currentDetails) this.currentDetails.remove();
    this.currentDetails = new DetailsView({ model: movie });
    this.render();
  },

  setChose: function () {
    if (this.currentDetails) this.currentDetails.remove();
    this.currentDetails = new ChoseView();
    this.render();
  },

  initialize: function (options) {
    this.currentDetails = new ChoseView();
    this.overview = new MoviesList({
      collection: options.router.movies,
      router: options.router,
    });
  },
});

var instance;
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

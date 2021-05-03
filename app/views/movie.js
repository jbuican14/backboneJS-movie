const Backbone = require('backbone');
const $ = require('jquery-untouched');
const _ = require('underscore');

const MovieView = Backbone.View.extend({
  tagName: 'article',
  className: 'movie',
  template: '<h1><a href="/movies/<%= id %>"><%= title %></a></h1><hr>',

  events: {
    click: 'selectMovie',
  },

  selectMovie: function (e) {
    console.log(`event on ${this.model.id}`);
    if (!this.model.get('selected')) {
      this.router.navigate(`/movies/${this.model.id}`, { trigger: true });
    }
  },

  render: function () {
    const tmpl = _.template(this.template);
    this.$el.html(tmpl(this.model.toJSON()));
    this.$el.toggleClass('selected', this.model.get('selected'));
    return this;
  },

  initialize: function (options) {
    this.listenTo(this.model, 'change:title', this.render);
    this.listenTo(this.model, 'change:selected', this.render);
    this.router = options.router;
  },
});

module.exports = MovieView;

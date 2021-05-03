const Backbone = require('backbone');
const $ = require('jquery-untouched');
const _ = require('underscore');

const MovieView = Backbone.View.extend({
  tagName: 'article',
  className: 'movie',
  template: '<h1><%= title %></h1><hr>',

  events: {
    'click': '_selectMovie1'
  },

  _selectMovie1: function(e) {
    e.preventDefault();
    let selected = this.model.get('selected');
    this.model.collection.resetSelected();
    if (!selected) {
      this.model.collection.selectByID(this.model.id);
    }  },

  selectMovie: function(evt) {
    evt.preventDefault();
    console.log($(evt.currentTarget).html());
    this.model.toggleSelected(); 
  },
  
  _selectMovie: function(evt) {
    evt.preventDefault();
    if(!this.model.get('selected')) {
      // this.model.collection.resetSelected(); 
      this.model.collection.selectByID(this.model.id);

    }
    console.log(`event on ${this.model.id}` );
  },

  render: function() {
    const tmpl = _.template(this.template);
    this.$el.html(tmpl(this.model.toJSON()));
    let selected = (this.selection.get('selected') === this.model.id)
    this.$el.toggleClass('selected', selected);
    return this;
  },

  initialize: function() {
    this.selection = options.selection;
    this.listenTo(this.model, 'change:selected', this.render);
  }
});

module.exports = MovieView; 
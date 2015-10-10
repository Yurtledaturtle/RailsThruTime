console.log('scripts loaded');

var token = $('#api-token').val();
$.ajaxSetup({
  headers:{
    "accept": "application/json",
    "token": token
  }
});

// Model
var Decade = Backbone.Model.extend({});

// Collection
var DecadeCollection = Backbone.Collection.extend({
  model: Decade,
  url: '/api/decades'
});

// Views
var DecadeView = Backbone.View.extend({
  tagName: 'div',
  template: _.template( $('#decade-template').html() ),
  render: function(){
    this.$el.empty();
    var html = this.template( this.model.toJSON() );
    var $html = $( html );
    this.$el.append( $html );
  },
  events:{
    'click button.remove': 'removeDecade'
  },
  removeDecade: function(){
    this.model.destroy();
    this.$el.remove();
  }

});

var DecadeListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(){
    this.$el.empty();
    var decades = this.collection.models;
    var view;
    for (var i = 0; i < decades.length; i++) {
      view = new DecadeView({ model: decades[i] });
      view.render();
      this.$el.append( view.$el );
    }
  }
});




var decades = new DecadeCollection();
var decadePainter = new DecadeListView({
  collection: decades,
  el: $('#decades-list')
});
decades.fetch();

//
// $('form.create-decade').on('submit', function(e) {
//       e.preventDefault();
//       var data = $(this).serializeJSON();
//       decades.create(data.decade);
//     });

$('form.create-decade').on('submit', function(e){
  e.preventDefault();
  var newComment = $(this).find("#decade-comment").val();
  decades.create({comment: newComment});
});

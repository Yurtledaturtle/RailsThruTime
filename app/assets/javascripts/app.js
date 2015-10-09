console.log('scripts loaded');

var token = $('#api-token').val();
$.ajaxSetup({
  headers:{
    "accept": "applications/json",
    "token": token
  }
});

// Model
var Todo = Backbone.Model.extend({});

// Collection
var TodoCollection = Backbone.Collection.extend({
  model: Todo,
  url: '/api/todos'
});

// Views
var TodoView = Backbone.View.extend({
  tagName: 'div',
  className: 'todo',
  template: _.template( $('#todo-template').html() ),
  render: function(){
    this.$el.empty();
    var html = this.template( this.model.toJSON() );
    var $html = $( html );
    this.$el.append( $html );
  },
  events:{
    'click button.remove': 'removeTodo'
  },
  removeTodo: function(){
    this.model.destroy();
    this.$el.remove();
  }

});

var TodoListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(){
    this.$el.empty();
    var todos = this.collection.models;
    var view;
    for (var i = 0; i < todos.length; i++) {
      view = new TodoView({model: todos[i]});
      view.render();
      this.$el.append( view.$el );
    }
  }
});




var todos = new TodoCollection();
var todoPainter = new TodoListView({
  collection: todos,
  el: $('#todos-list')
});
todos.fetch();


$('form.create-todo').on('submit', function(e) {
      e.preventDefault();
      var data = $(this).serializeJSON();
      todos.create(data.todo);
    });

// $('form.create-todo').on('submit', function(e){
//   e.preventDefault();
//   var newMessage = $(this).find("#me-message").val();
//   chirps.create({message: newMessage});
// });

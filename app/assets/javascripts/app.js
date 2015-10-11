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

function show2010(){
  $("#2010").click(function(){
      $("#1900player").hide();
      $("#1910player").hide();
      $("#1920player").hide();
      $("#1930player").hide();
      $("#1940player").hide();
      $("#1950player").hide();
      $("#1960player").hide();
      $("#1970player").hide();
      $("#1980player").hide();
      $("#1990player").hide();
      $("#2000player").hide();
  });
  $("#2010").click(function(){
      $("#2010player").show();
  });
}

function show1990(){
    $("#1990").click(function(){
        $("#1900player").hide();
        $("#1910player").hide();
        $("#1920player").hide();
        $("#1930player").hide();
        $("#1940player").hide();
        $("#1950player").hide();
        $("#1960player").hide();
        $("#1970player").hide();
        $("#1980player").hide();
        $("#2000player").hide();
        $("#2010player").hide();
    });
    $("#1990").click(function(){
        $("#1990player").show();
    });
  }

  function show2000(){
      $("#2000").click(function(){
          $("#1900player").hide();
          $("#1910player").hide();
          $("#1920player").hide();
          $("#1930player").hide();
          $("#1940player").hide();
          $("#1950player").hide();
          $("#1960player").hide();
          $("#1970player").hide();
          $("#1980player").hide();
          $("#1990player").hide();
          $("#2010player").hide();
      });
      $("#2000").click(function(){
          $("#2000player").show();
      });
    }


$(document).ready(function(){
  // show1900();
  // show1910();
  // show1920();
  // show1930();
  // show1940();
  // show1950();
  // show1960();
  // show1970();
  // show1980();
  show1990();
  show2000();
  show2010();
});

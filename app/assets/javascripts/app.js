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
  className: 'stuff',
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

// function slider(){
//   $( "#timeline" ).slider({
//       orientation: "horizontal",
//       range: "min",
//       min: 1900,
//       max: 2010,
//       step: 10,
//       value: 1900,
//       slide: function( event, ui ) {
//         var stuff = $( "#amount" ).val( ui.value );
//       }
//     });
//     $( "#amount" ).val( $( "#timeline" ).slider( "value" ) );
//   }
//     slider();

  function hidePlayers(){
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
    $("#2010player").hide();
  }

  function show1900(){
      $("#1900").click(function(){
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
          $("#2010player").hide();

          $("#1900player").show();
          $('body').css("background-image", "none");
          $('body').css("background-image", "url(http://www.richwooders.com/book/richwood_1900/oakford-ave_1900_705-448.jpg)");
      });
  }

  function show1910(){
      $("#1910").click(function(){
          $("#1900player").hide();
          $("#1920player").hide();
          $("#1930player").hide();
          $("#1940player").hide();
          $("#1950player").hide();
          $("#1960player").hide();
          $("#1970player").hide();
          $("#1980player").hide();
          $("#1990player").hide();
          $("#2000player").hide();
          $("#2010player").hide();

          $("#1910player").show();
          $('body').css("background-image", "none");
          $('body').css("background-image", "url(http://www.martinturnbull.com/wp-content/uploads/2013/07/5th_and_olive_los_angeles_1910.jpg)");
      });
  }

  function show1920(){
      $("#1920").click(function(){
          $("#1900player").hide();
          $("#1910player").hide();
          $("#1930player").hide();
          $("#1940player").hide();
          $("#1950player").hide();
          $("#1960player").hide();
          $("#1970player").hide();
          $("#1980player").hide();
          $("#1990player").hide();
          $("#2000player").hide();
          $("#2010player").hide();

          $("#1920player").show();
          $('body').css("background-image", "none");
          $('body').css("background-image", "url(http://www.rootsweb.ancestry.com/~arbradle/places/images/warren_main_st_1920s_lg.jpg)");
      });
  }



  function show1930(){
      $("#1930").click(function(){
          $("#1900player").hide();
          $("#1910player").hide();
          $("#1920player").hide();
          $("#1940player").hide();
          $("#1950player").hide();
          $("#1960player").hide();
          $("#1970player").hide();
          $("#1980player").hide();
          $("#1990player").hide();
          $("#2000player").hide();
          $("#2010player").hide();

          $("#1930player").show();
          $('body').css("background-image", "none");
          $('body').css("background-image", "url(http://www.carstyling.ru/resources/entries/3595/Burney_Streamline_London_Sep-15_1930.jpg)");
      });
  }

  function show1940(){
      $("#1940").click(function(){
          $("#1900player").hide();
          $("#1910player").hide();
          $("#1920player").hide();
          $("#1930player").hide();
          $("#1950player").hide();
          $("#1960player").hide();
          $("#1970player").hide();
          $("#1980player").hide();
          $("#1990player").hide();
          $("#2000player").hide();
          $("#2010player").hide();

          $("#1940player").show();
          $('body').css("background-image", "none");
          $('body').css("background-image", "url(http://media.timeout.com/images/100689971/image.jpg)");
      });
  }

  function show1950(){
      $("#1950").click(function(){
          $("#1900player").hide();
          $("#1910player").hide();
          $("#1920player").hide();
          $("#1930player").hide();
          $("#1940player").hide();
          $("#1960player").hide();
          $("#1970player").hide();
          $("#1980player").hide();
          $("#1990player").hide();
          $("#2000player").hide();
          $("#2010player").hide();

          $("#1950player").show();
          $('body').css("background-image", "none");
          $('body').css("background-image", "url(https://playingintheworldgame.files.wordpress.com/2014/02/new-york-1950-1a.jpg)");
      });
  }

  function show1960(){
      $("#1960").click(function(){
          $("#1900player").hide();
          $("#1910player").hide();
          $("#1920player").hide();
          $("#1930player").hide();
          $("#1940player").hide();
          $("#1950player").hide();
          $("#1970player").hide();
          $("#1980player").hide();
          $("#1990player").hide();
          $("#2000player").hide();
          $("#2010player").hide();

          $("#1960player").show();
          $('body').css("background-image", "none");
          $('body').css("background-image", "url(http://www.allthingsgomusic.com/wp-content/uploads/2011/10/new_york_city_time_square_at_night_1960s.jpg)");
      });
  }

  function show1970(){
      $("#1970").click(function(){
          $("#1900player").hide();
          $("#1910player").hide();
          $("#1920player").hide();
          $("#1930player").hide();
          $("#1940player").hide();
          $("#1950player").hide();
          $("#1960player").hide();
          $("#1980player").hide();
          $("#1990player").hide();
          $("#2000player").hide();
          $("#2010player").hide();

          $("#1970player").show();
          $('body').css("background-image", "none");
          $('body').css("background-image", "url(http://41.media.tumblr.com/3ed23f9b5649126439df0c7a101289a3/tumblr_nkg8dmRLZL1qzng72o7_1280.jpg)");
      });
  }

  function show1980(){
      $("#1980").click(function(){
          $("#1900player").hide();
          $("#1910player").hide();
          $("#1920player").hide();
          $("#1930player").hide();
          $("#1940player").hide();
          $("#1950player").hide();
          $("#1960player").hide();
          $("#1970player").hide();
          $("#1990player").hide();
          $("#2000player").hide();
          $("#2010player").hide();

          $("#1980player").show();
          $('body').css("background-image", "none");
          $('body').css("background-image", "url(https://i.ytimg.com/vi/9wjlVskJHYY/maxresdefault.jpg)");
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

        $("#1990player").show();
        $('body').css("background-image", "none");
        $('body').css("background-image", "url(https://swarneidat.files.wordpress.com/2009/10/timessquare1995.jpg)");
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

          $("#2000player").show();
          $('body').css("background-image", "none");
          $('body').css("background-image", "url(http://static01.nyt.com/images/2014/03/16/realestate/16COVER1_SPAN/16COVER1_SPAN-master675-v2.jpg)");
      });
  }
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

        $("#2010player").show();
        $('body').css("background-image", "none");
        $('body').css("background-image", "url(http://www.utica.edu/student-blogs/wp-content/uploads/2014/03/Times-square-manhattan-new-york-nyc-crossroads-world.jpg)");
    });
}


$(document).ready(function(){
  hidePlayers();
  show1900();
  show1910();
  show1920();
  show1930();
  show1940();
  show1950();
  show1960();
  show1970();
  show1980();
  show1990();
  show2000();
  show2010();
});

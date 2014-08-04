//var $ = require('jquery');
//var test = require('./test');
//
//$('H1').text(test.test);

var $ = require('jquery');
var handlebars = require('handlebars');
var Ember = require('ember');

App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

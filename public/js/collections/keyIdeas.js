define([
  'underscore',
  'backbone',
  'lib/backbone.localStorage',
  'js/models/keyIdea'
  ], function(_, Backbone, Store, KeyIdea){

// js/collections/keyIdeas.js

var app = app || {};

// collections of the KeyIdea Model

var KeyIdeas = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: KeyIdea,

     // Save all of the todo items under the `"todos-backbone"` namespace.
    localStorage: new Store('keyIdeas'),

});

var initialTemplate = [{title:'Idea1', description: 'Bullshit for the crowd'},
	       {title:'Idea2', description: 'Bullshit for the crowd'},
	       {title:'Idea3', description: 'Bullshit for the crowd'}];

app_KeyIdeas = new KeyIdeas (initialTemplate);

console.log(app_KeyIdeas);

return app_KeyIdeas;

});




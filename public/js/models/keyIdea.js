
define(['backbone','underscore'], function(Backbone, _){


// js/models/keyIdeas.js

 //KeyIdea Model
var KeyIdea = Backbone.Model.extend({

    defaults: {title: 'Heading',
	       description: 'Bullshit about your main ideas',
	       SEOwise: 'What you want google to look for'
	      },

    url: "/api"

});

  return KeyIdea;
});

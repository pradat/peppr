// js/views/landing.js


define([
  'jquery',
  'underscore',
  'backbone',
  'text!js/templates/landingPage.html'
], function($, _, Backbone, landingPageTemplate){

//Definition of the marketing view

var LandingView = Backbone.View.extend({

    el:'maincontainer',

    template: _.template( landingPageTemplate ),

    initialize: function(){
	this.render();
	},

    render: function(){
	console.log('Landing page rendered');
	this.$el.append( this.template());

        _(function() {
            Holder.run();
	    console.log('Holder ran');
        }).defer();


	return this;
    }

});

return LandingView;

});

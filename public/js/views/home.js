// js/views/home.js


define([
  'jquery',
  'underscore',
  'backbone',
  'js/views/marketing',
    'text!js/templates/editedLanding.html'
  ], function($, _, Backbone, MarketingView,editedLandingTemplate){

//Definition of the marketing view

var HomeView = Backbone.View.extend({

    el: '#marketingView',

    template : _template( editedLandingTemplate ),

    initialize: function(){
	this.listenTo(app_KeyIdeas, 'add', this.addOne);

//	app_KeyIdeas.fetch();
	this.render();

	},

    render: function(){
	console.log(app_KeyIdeas);
	app_KeyIdeas.each(function( item ) {
	    this.renderKeyIdea( item );
	}, this );
    },


    renderKeyIdea: function(item){
	var view = new KeyIdeaView({
	    model: item
	});
	this.$el.append( view.render().el);
    },

    addOne: function(item){
	var view = new KeyIdeaView({model: item});
	console.log("KeyIdead added");
	this.$el.append( view.render().el );
	}
});

return HomeView;

});

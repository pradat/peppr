// js/views/marketing.js


define([
  'jquery',
  'underscore',
  'backbone',
  'js/collections/keyIdeas',
  'js/views/keyIdeas',
  ], function($, _, Backbone, app_KeyIdeas, KeyIdeaView){

//Definition of the marketing view

var MarketingView = Backbone.View.extend({

    el: '#marketingView',

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

return MarketingView

});

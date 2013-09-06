// js/views/keyIdea.js

define([
  'jquery',
  'underscore',
  'backbone',
  'text!js/templates/keyIdeas.html'
  ], function($, _, Backbone, keyIdeasTemplate){


// Definition of the view of one of the key idea

var KeyIdeaView = Backbone.View.extend({

    // Global variables
    currentDataEdited: null,
    currentTagEdited: null,

	//... is a list tag.
    tagName: 'div',
    className: 'col-lg-4 change',

      // Cache the template function for a single item.
    template: _.template( keyIdeasTemplate ),

    events: {
     'dblclick .change': 'edit',
	'keypress .edit': 'updateOnEnter',
	'blur .edit': 'close',
	'click .destroy': 'clear',
	},

       initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
       },

       // Re-render the titles of the todo item.
    render: function() {
	this.$el.html( this.template( this.model.toJSON() ) );
	    console.log('render run %s', new Date());

	_(function() {
	    Holder.run();
	}).defer();

	return this;
    },

//     Editing items: defining global variables
    edit: function(item) {
	this.currentDataEdited = item.currentTarget.getAttribute('data');
	this.currentTagEdited = item.currentTarget.tagName.toLowerCase();
	this.$el.children(this.currentTagEdited).addClass('editing');
	this.$el.children(this.currentTagEdited).children('.edit').focus();
    },

//     Function in order to finish editing an item: save and close the .edit element
    close: function(){
	var value = this.$('.editing').children('input').val();
	console.log('closed');
	if ( value ) {
	    var value = value.trim();
	    if (this.currentDataEdited === "title") {
		this.model.save({ title: value });
		} else if(this.currentDataEdited === "description") {
		    this.model.save({ description: value });
		}
	}
	this.$el.children(this.currentTagEdited).removeClass('editing');
    },

     // If you hit `enter`, we're through editing the item.
    updateOnEnter: function( e ) {
      if ( e.which === ENTER_KEY ) {
	this.close();
      }
    },

    //Clear the KeyIdealModel from the collection
    clear: function(){
	console.log('clicked on destroy');
	this.model.destroy();
    }


});

return KeyIdeaView;

});

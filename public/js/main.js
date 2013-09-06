// main.js

var ENTER_KEY = 13;

var logged = false;

require.config({
  baseUrl:'../',
  paths: {
    jquery: 'lib/jquery.min',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    text: 'lib/require/text'
  },

    shim: {
	underscore: {
	  exports: '_'
	},
	backbone: {
	    deps: ['underscore', 'jquery'],
	    exports: 'Backbone'
	}
    }

});

require(['js/views/marketing','js/views/landing'], function(MarketingView,LandingView){

//Initialize app

if (logged){
    var app_MarketingView = new MarketingView();
}
    else{
	var app_LandingView = new LandingView();
    }

});

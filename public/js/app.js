// app.js

var app = app || {};
var ENTER_KEY = 13;

//Initialize app

var initialTemplate = [{title:'Heading1', description: 'Bullshit for the crowd'},
	       {title:'Heading1', description: 'Bullshit for the crowd'},
	       {title:'Heading1', description: 'Bullshit for the crowd'}]
$(function(){
    new app.MarketingView(initialTemplate);
});

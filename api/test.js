var AV = require('leanengine');
  
AV.Cloud.define('test', function(request) {
	var UserFocus = AV.Object.extend('user_focus');
	var focus = new UserFocus();
	
	focus.set('user_id', "1");
	focus.set('focus_user_id', "2");
	focus.save().then(function(focus){
		console.log("1");
		return "success";	
	}, function(error){
		console.log(error);
		return error;
	});
});

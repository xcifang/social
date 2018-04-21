var AV = require('leanengine');
  
AV.Cloud.define('test', function(request) {
	var UserFocus = AV.Object.extend('user_focus');
	var focus = new UserFocus();
	
	focus.set('user_id', 1);
	focus.set('focus_user_id', 2);
	tudo.save().then(function(){
		return "success";	
	}, function(){
		return "error";
	});
});

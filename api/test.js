var AV = require('leanengine');
  
AV.Cloud.define('test', function(request) {
  return 'Hello test!';
});

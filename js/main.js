var app = angular.module('refApp', []);

app.controller('MainCtrl', [function() {
  console.log('MainCtrl has loaded!')
  var self = this
  self.references = [];
  self.testMessage = 'LOADED'
  var addRef = function() {
    console.log('ctrl got here');
    // var added = {url: url, size: size};
    // console.log('loaded: ' + added);
    // self.references.push(added);
  };
}]);

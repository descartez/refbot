var app = angular.module('refApp', []);

app.controller('MainCtrl', [function() {
  console.log('MainCtrl has loaded!')
  var self = this
  self.references = [];
  self.testMessage = 'LOADED'
  var addRef = function(title, url, size) {
    var added = {title: title, url: url, size: size}
    console.log('loaded: ' + added)
    references.push(added);
  };
}]);

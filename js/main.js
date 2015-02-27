var app = angular.module('refApp', []);

app.controller('MainCtrl', [function() {
  var self = this
  self.references = [];
  self.columns = 12
  // self.added = {};
  self.addRef = function(url, size) {
    var added = {url: url, size: size};
    self.references.push(added);
    self.columns -= size;
    console.log(self.columns)
  };
}]);

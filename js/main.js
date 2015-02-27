var app = angular.module('refApp', []);

app.controller('MainCtrl', [function() {
  var self = this
  self.references = [];
  // self.columns = 12
  self.addRef = function(url, size) {
    var added = {url: url, size: size};
    self.references.push(added);
    // self.columns -= size;
    console.log(self.columns)
  };

  var urlChecker = function(url) {
    //checks if pattern is present
    // if not, adds on http to url
  }

}]);

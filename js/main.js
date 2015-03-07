var app = angular.module('refApp', []);

app.controller('MainCtrl', [function() {
  var self = this
  self.references = [];
  // self.columns = 12
  self.addRef = function(urlToPass, size) {
    var added = {url: urlChecker(urlToPass), size: imgSizer(size)};
    console.log(added);
    self.references.push(added);
    // self.columns -= size;
    // console.log(self.columns)
  };

  var urlChecker = function(urlToTest) {
    //checks if pattern is present
    // if not, adds on http to url
      // what if https needed? error handling?
      var pattern = /^(f|ht)tps?:\/\//i;
      if(!pattern.test(urlToTest)) {
        urlToTest = "http://" + urlToTest;
      };
      return urlToTest;
    };

  var removeImage = function(object) {

  };

  var imgSizer = function(size) {
    if (size === 'small') {
      return 2;
    } else if (size === 'medium') {
      return 3
    } else if (size === 'large') {
      return 6
    } else if (size === 'x-large') {
      return 12
    }
  };

  }]);

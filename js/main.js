var app = angular.module('refApp', []);

app.controller('MainCtrl', [function() {
  var self = this
  self.references = [];
  // self.columns = 12
  self.addRef = function(url, size) {
    var added = {url: urlChecker(url), size: size};
    self.references.push(added);
    // self.columns -= size;
    // console.log(self.columns)
  };

  var urlChecker = function(url) {
    //checks if pattern is present
    // if not, adds on http to url
      // what if https needed? error handling?
      var pattern = /^(http?:\/\/)?/
      if(!!pattern.test(url)) {
        url = "http://" + url;
      };
      return url;
    }

  }]);

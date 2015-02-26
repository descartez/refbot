var app = angular.module('refApp', []);

app.controller('MainCtrl', [function() {
  console.log('MainCtrl has loaded!')
  var self = this
  self.references = [{size: 6, url:'http://globe-views.com/dcim/dreams/sword/sword-05.jpg'}, {size: 4, url: 'http://a.tgcdn.net/images/products/zoom/f2bb_orcrist_the_sword_of_thorin_oakenshield.jpg'}];
  self.testMessage = 'LOADED'
  var addRef = function(url, size) {
    var added = {url: url, size: size}
    console.log('loaded: ' + added)
    references.push(added);
  };
}]);

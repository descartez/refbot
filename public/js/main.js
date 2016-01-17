var app = angular.module('refApp', []);

app.controller('MainCtrl', ["$http", function($http) {
      var self = this;
      self.references = [];

      self.getBoard = function (boardId) {
        $http({
          method: 'GET',
          url: '/boards'
          }).then(function successCallback(response) {
            console.log(response)
            for (var index = 0; index < response.data.length; index++) {
            var tileUrl = response.data[index].tile.url
            console.log("tile size: " + response.data[index].tile.size)
            self.addRef(tileUrl, response.data[index].tile.size);
          }
            }, function errorCallback(response) {
              console.log('board ' + boardId + ' not found');
              console.log(response);
              });
          };


        self.addRef = function(urlToPass, size) {
          var added = {url: urlChecker(urlToPass), size: size};
          console.log(added);
          self.references.push(added);
          };

          self.changeSize = function(object, amount) {
            if ((object['size'] + amount) > 12) {
              object['size'] = 12;
              } else if ((object['size'] + amount) < 2) {
                object['size'] = 2;
                } else {
                  object['size'] += amount;
                }
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


                      var imgSizer = function(size) {
                        if (size === undefined) {
                          return 2;
                          } else if (size === 'small') {
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

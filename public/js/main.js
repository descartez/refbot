var app = angular.module('refApp', []);

app.controller('MainCtrl', ["$http",
  function($http) {
    var self = this;
    self.boardTitle = ""
    self.boardId = 0
    self.boardReferences = [];

    self.clearBoard = function () {
      self.boardTitle = ""
      self.boardId = 0
      self.boardReferences = [];
    }

    self.getBoard = function(boardId) {
      self.clearBoard();
      $http({
        method: 'GET',
        url: '/boards/' + boardId
      }).then(function successCallback(response) {
        console.log(response.data)
        fullBoard = response.data
        self.boardTitle = fullBoard.title
        self.boardId = fullBoard.id
        console.log(self.boardId)

        for (var index = 0; index < fullBoard.tiles.length; index++) {
          var tileId = fullBoard.tiles[index].id
          var tileUrl = fullBoard.tiles[index].url
          var tileSize = fullBoard.tiles[index].size

          self.addRef(tileId, tileUrl, tileSize);

        }
      }, function errorCallback(response) {
        console.log('board ' + boardId + ' not found');
        console.log(response);
      });
    };

    self.saveBoard = function() {
      boardObj = {id: self.boardId, title: self.boardTitle, tiles: self.boardReferences}
      $http.post("/boards/" + self.boardId, boardObj)
      .then(function (response) {
        console.log(response)
      })
    };

    self.addRef = function(refId, urlToPass, size) {
      var added = {
        id: refId,
        url: self.urlChecker(urlToPass),
        size: parseInt(size)
      };
      console.log(added);
      self.boardReferences.push(added);
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

    self.urlChecker = function(urlToTest) {
            //checks if pattern is present
            // if not, adds on http to url
            // what if https needed? error handling?
            var pattern = /^(f|ht)tps?:\/\//i;
            if (!pattern.test(urlToTest)) {
              urlToTest = "http://" + urlToTest;
            };
            return urlToTest;
          };

        }
        ]);

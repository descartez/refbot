var app = angular.module('refApp', []);

app.controller('MainCtrl', ["$http",
    function($http) {
        var self = this;
        self.boardTitle = ""
        self.boardReferences = [];

        self.getBoard = function(boardId) {
            $http({
                method: 'GET',
                url: '/boards/' + boardId
            }).then(function successCallback(response) {
                console.log(response.data)
                fullBoard = response.data
                self.boardTitle = fullBoard.title

                for (var index = 0; index < fullBoard.tiles.length; index++) {
                    var tileUrl = fullBoard.tiles[index].tile.url
                    var tileSize = fullBoard.tiles[index].tile.size

                    self.addRef(tileUrl, tileSize);

                }
            }, function errorCallback(response) {
                console.log('board ' + boardId + ' not found');
                console.log(response);
            });
        };

        self.addRef = function(urlToPass, size) {
            var added = {
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

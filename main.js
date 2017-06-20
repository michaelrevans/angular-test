var app = angular.module('listApp', []);

app.controller('ListController', ['$scope', function($scope) {

          $scope.test = 'Hello world!';

          $scope.users = [
            {
              id: 11111111,
              name: "Alexander Leichter",
              senderName: "Alexander Leichter",
              email: "alexander@getbyrd.com",
              type: "Business Customer"
            },
            {
              id: 22222222,
              name: "Sebastian Mach",
              senderName: "Sebastian Mach",
              email: "sebastian@getbyrd.com",
              type: "Business Customer"
            },
            {
              id: 33333333,
              name: "Petra Dobrocka",
              senderName: "Petra Dobrocka",
              email: "petra@getbyrd.com",
              type: "Business Customer"
            },
            {
              id: 44444444,
              name: "Christoph Krofitsch",
              senderName: "Christoph Krofitsch",
              email: "christoph@getbyrd.com",
              type: "Business Customer"
            },
            {
              id: 55555555,
              name: "Michael Innerhofer",
              senderName: "Michael Innerhofer",
              email: "michael@getbyrd.com",
              type: "Business Customer"
            }
          ];


          console.log($scope.users);

}]);

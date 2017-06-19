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


          // $scope.len = 0;
          //
          // $scope.repos = []
          //
          // $scope.submit = function(usr) {
          //   var requrl = 'https://api.github.com/users/' + usr + '/repos';
          //   $.ajax({
          //     method: 'GET',
          //     url: requrl,
          //     success: function(repositories) {
          //       $('.row-content').hide(200);
          //       var usrVal = $('#username-input').val();
          //       $scope.repos = repositories;
          //       $scope.len = repositories.length;
          //       $scope.usr = usr;
          //       if ($scope.len == 0) {
          //         $('#no-results').show(200);
          //       } else if (usrVal === '') {
          //         $('#invalid').show(200);
          //       } else {
          //         $('#results').show(200);
          //       }
          //     },
          //     error: function(jqXHR, textStatus, errorThrown) {
          //       console.log("Status code: " + jqXHR.status + " - " + errorThrown);
          //       $('.row-content').hide(200);
          //       $('#invalid').show(200);
          //     },
          //     async: false
          //   })
          // };

}]);

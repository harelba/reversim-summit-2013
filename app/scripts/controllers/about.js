'use strict';


app.controller('AboutCtrl', ['$scope', '$http', 'data' ,function($scope, $http, data) {
  var sheet = 1;
  $http.jsonp(data.getDataSheetUrl(sheet)).success(function(returned) {
    $scope.people = data.parseFromSpreadsheet(returned, ['name', 'css', 'bio']);
  }).error(function(returned) {
    console.log(returned);
  });

  $scope.editUrl = data.getDataSheetHumanUrl(sheet);

}]);

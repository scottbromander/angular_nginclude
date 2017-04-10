myApp.controller('OneController', ['$scope', 'InfoService', function($scope, InfoService){
  $scope.getOMDB = InfoService.getOMDB;
}]);

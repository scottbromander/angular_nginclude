myApp.controller('ThreeController', ['$scope', 'InfoService', function($scope, InfoService){
  $scope.favoriteList = InfoService.favoriteList;
}]);

myApp.controller('TwoController', ['$scope', 'InfoService', function($scope, InfoService){
    $scope.infoFromServer = InfoService.infoFromServer;

    $scope.movie = {};

    $scope.addToFav = function(){
      $scope.movie = angular.copy($scope.infoFromServer.response.data);
      InfoService.addFavorite($scope.movie);
      InfoService.clearMovie(InfoService.infoFromServer);
    };
}]);

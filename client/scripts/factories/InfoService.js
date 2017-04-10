myApp.factory('InfoService', ['$http', function($http){
  var infoFromServer = {};
  var favoriteList = [];

  //Public
  return {
    infoFromServer : infoFromServer,
    favoriteList : favoriteList,
    getRequest : function(){
      $http.get('/info').then(function(response){
        infoFromServer.response = response;
      });
    },
    getOMDB : function(movie){
      $http.get('http://www.omdbapi.com/?t=' + movie + '&y=&plot=full&r=json').then(function(response){
        infoFromServer.response = response;
      });
    },
    addFavorite : function(movie){
      favoriteList.push(movie);
    },
    clearMovie : function(info){
      infoFromServer.response = null;
    }
  };
}]);

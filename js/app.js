(function(){

  var app = angular.module('book', ['ngRoute']);

  // 路由设置
  app.config(['$routeProvider', function($routeProvider,$locationProvider){
    
    $routeProvider.when('/', {
      templateUrl :'views/home.html',
      controller : 'BookController'
    })
    .otherwise({
      redirectTo: '/'
    })

  }]);

  // 图书controller,使用http 服务获取远程数据 
  app.controller('BookController', function($scope, $http){

    $scope.formData = {};
    $scope.bookArr = [];
   
    $scope.search = function(){
      $http.jsonp("http://localhost/book-ajs/api/search.php?callback=JSON_CALLBACK&q=" + $scope.formData.name).success(function(response) {
         console.log(response.books);
         $scope.bookArr = response.books;

      });
    }

   

  });





})();
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
    $scope.isActive = false;
   
    $scope.search = function(){
     
      /*搜索词不为空的时候，向接口请求数据， 启动加载动画*/
      if(!angular.isUndefined($scope.formData.name)){
          $scope.isActive = true;   /*启动loading动画*/
          $http.jsonp("http://192.168.0.123/ajs-book/api/search.php?callback=JSON_CALLBACK&q=" + $scope.formData.name).success(function(response) {
             console.log(response.books);

             $scope.isActive = false;   /*数据请求成功，关闭loading动画*/
             $scope.bookArr = response.books;

          });
          
        
      }
    }

   

  });





})();
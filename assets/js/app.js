'use strict';
var myApp = angular.module('myApp', ['ngRoute','ngAnimate', 'ngSanitize', 'ui.bootstrap']);

myApp.config(function($routeProvider,$locationProvider){
  
    $routeProvider 
    
    .when('/',{
        templateUrl:'/home.html',
        controller:'mainController'
    })
    .when('/about-swepco',{
       templateUrl: '/about-swepco.html',
       controller: 'mainController'
   })
   .when('/1933-our-heritage',{
       templateUrl: '/1933-our-heritage.html',
       controller: 'mainController'
   })
   .when('/iso-certification',{
       templateUrl: '/iso-certification.html',
       controller: 'mainController'
   })
    .when('/quality-ingredients',{
       templateUrl: '/quality-ingredients.html',
       controller: 'mainController'
   })
    .when('/energy-star-partner',{
       templateUrl: '/energy-star-partner.html',
       controller: 'mainController'
   })
    .when('/environmental-stewards',{
       templateUrl: '/environmental-stewards.html',
       controller: 'mainController'
   })
    .when('/industry-associations',{
       templateUrl: '/industry-associations.html',
       controller: 'mainController'
   })
    .when('/reach-compliant',{
       templateUrl: '/reach-compliant.html',
       controller: 'mainController'
   })
   .when('/lubricants',{
       templateUrl: '/lubricants.html',
       controller: 'mainController'
   })
   .when('/contactUs',{
       templateUrl: '/contactUs.html',
       controller: 'mainController'
   })
    
    $locationProvider.html5Mode({enabled:true,requireBase:false});
});
             
myApp.controller('mainController',['$scope',function($scope){
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = slides.length + 1;
    slides.push({
      image: 'assets/img/homeslider' + newWidth+'.jpg',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  
  for (var i = 0; i < 5; i++) {
    $scope.addSlide();
  }
      $scope.oneAtATime = false;
                                   
}]);

myApp.controller('subController',['$scope',function($scope){
    console.log('inside subController');
}]);
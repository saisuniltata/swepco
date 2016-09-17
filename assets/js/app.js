'use strict';
var myApp = angular.module('myApp', ['ui.bootstrap','ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider','$locationProvider',function($stateProvider, $urlRouterProvider,$locationProvider){
  
    $urlRouterProvider.otherwise('/home');
    $stateProvider 
    
    .state('home',{
        url:'/home',
        templateUrl:'/home.html'
    })
    .state('about-swepco',{
        url:'/about-swepco',
       templateUrl: '/about-swepco.html'
   })
   .state('1933-our-heritage',{
        url:'/1933-our-heritage',
       templateUrl: '/1933-our-heritage.html'
   })
   .state('iso-certification',{
        url:'/iso-certification',
       templateUrl: '/iso-certification.html'
   })
    .state('quality-ingredients',{
        url:'/quality-ingredients',
       templateUrl: '/quality-ingredients.html'
   })
    .state('energy-star-partner',{
        url:'/energy-star-partner',
       templateUrl: '/energy-star-partner.html'
   })
    .state('environmental-stewards',{
        url:'/environmental-stewards',
       templateUrl: '/environmental-stewards.html'
   })
    .state('industry-associations',{
        url:'/industry-associations',
       templateUrl: '/industry-associations.html'
   })
    .state('reach-compliant',{
        url:'/reach-compliant',
       templateUrl: '/reach-compliant.html'
   })
   .state('lubricants',{
        url:'/lubricants',
       templateUrl: 'lubricants.html',
        controller:'mainController'
   })
    .state('lubricants.115',{
        url:'/115',    
       views: {
           'paragraph':{templateUrl:'115_paragraph.html'},
           'tabular':{templateUrl:'115_tabular.html'}
       }
   })
   .state('contactUs',{
        url:'/contactUs',
       templateUrl: '/contactUs.html'
   })

    
   $locationProvider.html5Mode({enabled:true,requireBase:false});
}]);
             
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
      $scope.oneAtATime = true;
                                   
}]);

myApp.controller('subController',['$scope',function($scope){
    console.log('inside subController');
}]);
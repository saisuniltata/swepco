'use strict';
var myApp = angular.module('myApp', ['ui.bootstrap','ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider','$locationProvider',function($stateProvider, $urlRouterProvider,$locationProvider){
  
    $urlRouterProvider.otherwise('/home');
    $stateProvider 
    
    .state('home',{
        url:'/home',
        templateUrl:'/home.html',
        controller:'mainController'
    })
    .state('about-swepco',{
        url:'/about-swepco',
       templateUrl: '/assets/static/about-swepco/about-swepco.html'
   })
   .state('1933-our-heritage',{
        url:'/1933-our-heritage',
       templateUrl: '/assets/static/about-swepco/1933-our-heritage.html'
   })
   .state('iso-certification',{
        url:'/iso-certification',
       templateUrl: '/assets/static/about-swepco/iso-certification.html'
   })
    .state('quality-ingredients',{
        url:'/quality-ingredients',
       templateUrl: '/assets/static/about-swepco/quality-ingredients.html'
   })
    .state('energy-star-partner',{
        url:'/energy-star-partner',
       templateUrl: '/assets/static/about-swepco/energy-star-partner.html'
   })
    .state('environmental-stewards',{
        url:'/environmental-stewards',
       templateUrl: '/assets/static/about-swepco/environmental-stewards.html'
   })
    .state('industry-associations',{
        url:'/industry-associations',
       templateUrl: '/assets/static/about-swepco/industry-associations.html'
   })
    .state('reach-compliant',{
        url:'/reach-compliant',
       templateUrl: '/assets/static/about-swepco/reach-compliant.html'
   })
   .state('lubricants',{
        url:'/lubricants',
       templateUrl: '/assets/static/lubricants/lubricants.html',
        controller:'mainController'
   })
    .state('lubricants.115',{
        url:'/115',    
       views: {
           'paragraph':{templateUrl:'/assets/static/lubricants/115_paragraph.html'},
           'tabular':{templateUrl:'/assets/static/lubricants/115_tabular.html'}
       }
    })
    .state('lubricants.121',{
        url:'/121',    
       views: {
           'paragraph':{templateUrl:'/assets/static/lubricants/121_paragraph.html'},
           'tabular':{templateUrl:'/assets/static/lubricants/121_tabular.html'}
       }
   })
    .state('lubricants.123',{
        url:'/123',    
       views: {
           'paragraph':{templateUrl:'/assets/static/lubricants/123_paragraph.html'},
           'tabular':{templateUrl:'/assets/static/lubricants/123_tabular.html'}
       }
   })
    /*.state('lubricants.165',{
        url:'/165',    
       views: {
           'paragraph':{templateUrl:'/assets/static/lubricants/165_paragraph.html'},
           'tabular':{templateUrl:'/assets/static/lubricants/165_tabular.html'}
       }
   })
    .state('lubricants.164',{
        url:'/164',    
       views: {
           'paragraph':{templateUrl:'/assets/static/lubricants/164_paragraph.html'},
           'tabular':{templateUrl:'/assets/static/lubricants/164_tabular.html'}
       }
   })
    .state('lubricants.113',{
        url:'/113',    
       views: {
           'paragraph':{templateUrl:'/assets/static/lubricants/113_paragraph.html'},
           'tabular':{templateUrl:'/assets/static/lubricants/113_tabular.html'}
       }
   })
    .state('lubricants.402',{
        url:'/402',    
       views: {
           'paragraph':{templateUrl:'/assets/static/lubricants/402_paragraph.html'},
           'tabular':{templateUrl:'/assets/static/lubricants/402_tabular.html'}
       }
   })
    .state('lubricants.121',{
        url:'/121',    
       views: {
           'paragraph':{templateUrl:'/assets/static/lubricants/121_paragraph.html'},
           'tabular':{templateUrl:'/assets/static/lubricants/121_tabular.html'}
       }
   })
    .state('lubricants.101',{
        url:'/101',    
       views: {
           'paragraph':{templateUrl:'/assets/static/lubricants/101_paragraph.html'},
           'tabular':{templateUrl:'/assets/static/lubricants/101_tabular.html'}
       }
   })
    .state('lubricants.102',{
        url:'/102',    
       views: {
           'paragraph':{templateUrl:'/assets/static/lubricants/102_paragraph.html'},
           'tabular':{templateUrl:'/assets/static/lubricants/102_tabular.html'}
       }
   })
    .state('lubricants.104',{
        url:'/104',    
       views: {
           'paragraph':{templateUrl:'/assets/static/lubricants/104_paragraph.html'},
           'tabular':{templateUrl:'/assets/static/lubricants/104_tabular.html'}
       }
   })
    .state('lubricants.103',{
        url:'/103',    
       views: {
           'paragraph':{templateUrl:'/assets/static/lubricants/103_paragraph.html'},
           'tabular':{templateUrl:'/assets/static/lubricants/103_tabular.html'}
       }
   })
    .state('lubricants.105',{
        url:'/105',    
       views: {
           'paragraph':{templateUrl:'/assets/static/lubricants/105_paragraph.html'},
           'tabular':{templateUrl:'/assets/static/lubricants/105_tabular.html'}
       }
   })
    .state('lubricants.110',{
        url:'/110',    
       views: {
           'paragraph':{templateUrl:'/assets/static/lubricants/110_paragraph.html'},
           'tabular':{templateUrl:'/assets/static/lubricants/110_tabular.html'}
       }
   })
    .state('lubricants.123',{
        url:'/123',    
       views: {
           'paragraph':{templateUrl:'/assets/static/lubricants/123_paragraph.html'},
           'tabular':{templateUrl:'/assets/static/lubricants/123_tabular.html'}
       }
   })
   */
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
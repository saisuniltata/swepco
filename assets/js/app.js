'use strict';
var myApp = angular.module('myApp', ['ui.bootstrap', 'ui.router', 'vcRecaptcha']);
myApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home', {
            url: '/home'
            , templateUrl: '/home.html'
            , controller: 'mainController'
        }).state('about-swepco', {
            url: '/about-swepco'
            , templateUrl: '/assets/static/about-swepco/about-swepco.html'
        }).state('1933-our-heritage', {
            url: '/1933-our-heritage'
            , templateUrl: '/assets/static/about-swepco/1933-our-heritage.html'
        }).state('iso-certification', {
            url: '/iso-certification'
            , templateUrl: '/assets/static/about-swepco/iso-certification.html'
        }).state('quality-ingredients', {
            url: '/quality-ingredients'
            , templateUrl: '/assets/static/about-swepco/quality-ingredients.html'
        }).state('energy-star-partner', {
            url: '/energy-star-partner'
            , templateUrl: '/assets/static/about-swepco/energy-star-partner.html'
        }).state('environmental-stewards', {
            url: '/environmental-stewards'
            , templateUrl: '/assets/static/about-swepco/environmental-stewards.html'
        }).state('industry-associations', {
            url: '/industry-associations'
            , templateUrl: '/assets/static/about-swepco/industry-associations.html'
        }).state('reach-compliant', {
            url: '/reach-compliant'
            , templateUrl: '/assets/static/about-swepco/reach-compliant.html'
        }).state('lubricants', {
            url: '/lubricants'
            , templateUrl: '/assets/static/lubricants/lubricants.html'
            , controller: 'mainController'
        }).state('lubricants.115', {
            url: '/115'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/115_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/115_tabular.html'
                }
            }
        }).state('lubricants.121', {
            url: '/121'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/121_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/121_tabular.html'
                }
            }
        }).state('lubricants.123', {
            url: '/123'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/123_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/123_tabular.html'
                }
            }
        }).state('lubricants.165', {
            url: '/165'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/165_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/165_tabular.html'
                }
            }
        }).state('lubricants.164', {
            url: '/164'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/164_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/164_tabular.html'
                }
            }
        }).state('lubricants.113', {
            url: '/113'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/113_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/113_tabular.html'
                }
            }
        }).state('lubricants.402', {
            url: '/402'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/402_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/402_tabular.html'
                }
            }
        }).state('lubricants.101', {
            url: '/101'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/101_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/101_tabular.html'
                    , controller: 'mainController'
                }
            }
        }).state('lubricants.102', {
            url: '/102'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/102_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/102_tabular.html'
                }
            }
        }).state('lubricants.104', {
            url: '/104'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/104_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/104_tabular.html'
                }
            }
        }).state('lubricants.103', {
            url: '/103'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/103_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/103_tabular.html'
                }
            }
        }).state('lubricants.105', {
            url: '/105'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/105_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/105_tabular.html'
                }
            }
        }).state('lubricants.110', {
            url: '/110'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/110_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/110_tabular.html'
                }
            }
        })
        /*.state('lubricants.201', {
            url: '/201'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/201_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/201_tabular.html'
                }
            }
        }).state('lubricants.202', {
            url: '/202'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/202_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/202_tabular.html'
                }
            }
        }).state('lubricants.212', {
            url: '/212'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/212_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/212_tabular.html'
                }
            }
        }).state('lubricants.757', {
            url: '/757'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/757_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/757_tabular.html'
                }
            }
        }).state('lubricants.201', {
            url: '/201_industrial'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/201_industrial_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/201_industrial_tabular.html'
                }
            }
        }).state('lubricants.203', {
            url: '/203'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/203_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/203_tabular.html'
                }
            }
        }).state('lubricants.706', {
            url: '/706'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/706_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/706_tabular.html'
                }
            }
        }).state('lubricants.222', {
            url: '/222'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/222_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/222_tabular.html'
                }
            }
        }).state('lubricants.305', {
            url: '/305'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/305_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/305_tabular.html'
                }
            }
        }).state('lubricants.306', {
            url: '/306'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/306_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/306_tabular.html'
                }
            }
        }).state('lubricants.308', {
            url: '/308'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/308_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/308_tabular.html'
                }
            }
        }).state('lubricants.304', {
            url: '/304'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/304_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/304_tabular.html'
                }
            }
        }).state('lubricants.303', {
            url: '/303'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/303_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/303_tabular.html'
                }
            }
        }).state('lubricants.313', {
            url: '/313'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/313_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/313_tabular.html'
                }
            }
        }).state('lubricants.314', {
            url: '/314'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/314_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/314_tabular.html'
                }
            }
        }).state('lubricants.501', {
            url: '/501'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/501_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/501_tabular.html'
                }
            }
        }).state('lubricants.503', {
            url: '/503'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/503_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/503_tabular.html'
                }
            }
        }).state('lubricants.502', {
            url: '/502'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/502_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/502_tabular.html'
                }
            }
        }).state('lubricants.512', {
            url: '/512'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/512_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/512_tabular.html'
                }
            }
        }).state('lubricants.711', {
            url: '/711'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/711_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/711_tabular.html'
                }
            }
        }).state('lubricants.712', {
            url: '/712'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/712_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/712_tabular.html'
                }
            }
        }).state('lubricants.714', {
            url: '/714'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/714_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/714_tabular.html'
                }
            }
        }).state('lubricants.717', {
            url: '/717'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/717_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/717_tabular.html'
                }
            }
        }).state('lubricants.709', {
            url: '/709'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/709_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/709_tabular.html'
                }
            }
        }).state('lubricants.737', {
            url: '/737'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/737_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/737_tabular.html'
                }
            }
        }).state('lubricants.755', {
            url: '/755'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/755_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/755_tabular.html'
                }
            }
        }).state('lubricants.703', {
            url: '/703'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/703_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/703_tabular.html'
                }
            }
        }).state('lubricants.704', {
            url: '/704'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/704_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/704_tabular.html'
                }
            }
        }).state('lubricants.708', {
            url: '/708'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/708_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/708_tabular.html'
                }
            }
        }).state('lubricants.750', {
            url: '/750'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/750_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/750_tabular.html'
                }
            }
        }).state('lubricants.702', {
            url: '/702'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/702_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/702_tabular.html'
                }
            }
        }).state('lubricants.723', {
            url: '/723'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/723_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/723_tabular.html'
                }
            }
        }).state('lubricants.724', {
            url: '/724'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/724_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/724_tabular.html'
                }
            }
        }).state('lubricants.715', {
            url: '/715'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/715_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/715_tabular.html'
                }
            }
        }).state('lubricants.728', {
            url: '/728'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/728_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/728_tabular.html'
                }
            }
        }).state('lubricants.729', {
            url: '/729'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/729_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/729_tabular.html'
                }
            }
        }).state('lubricants.801', {
            url: '/801'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/801_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/801_tabular.html'
                }
            }
        }).state('lubricants.802', {
            url: '/802'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/802_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/802_tabular.html'
                }
            }
        }).state('lubricants.803', {
            url: '/803'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/803_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/803_tabular.html'
                }
            }
        }).state('lubricants.808', {
            url: '/808'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/808_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/808_tabular.html'
                }
            }
        }).state('lubricants.812', {
            url: '/812'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/812_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/812_tabular.html'
                }
            }
        }).state('lubricants.815', {
            url: '/815'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/815_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/815_tabular.html'
                }
            }
        }).state('lubricants.816', {
            url: '/816'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/816_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/816_tabular.html'
                }
            }
        }).state('lubricants.818', {
            url: '/818'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/818_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/818_tabular.html'
                }
            }
        }).state('lubricants.Concentrated', {
            url: '/concentrated'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/concentrated_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/concentrated_tabular.html'
                }
            }
        }).state('lubricants.pro-scrub', {
            url: '/pro-scrub'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/pro-scrub_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/pro-scrub_tabular.html'
                }
            }
        }).state('lubricants.zonex', {
            url: '/zonex'
            , views: {
                'paragraph': {
                    templateUrl: '/assets/static/lubricants/zonex_paragraph.html'
                }
                , 'tabular': {
                    templateUrl: '/assets/static/lubricants/zonex_tabular.html'
                }
            } 
            
        })*/
        .state('contactUs', {
            url: '/contactUs'
            , templateUrl: '/contactUs.html'
            , controller: 'contactController'
        });
    $locationProvider.html5Mode({
        enabled: true
        , requireBase: false
    });
}]);
myApp.controller('mainController', ['$scope', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;
    $scope.addSlide = function () {
        var newWidth = slides.length + 1;
        slides.push({
            image: 'assets/img/homeslider' + newWidth + '.jpg'
            , text: ['Environmental Stewards', 'Energy Star Partner', 'ISO 9001 Certified', 'LabTec Fluid Analysis Program', 'SWEPCO 201 Multi-Purpose Gear Lube'][slides.length % 5]
            , id: currIndex++
        });
    };
    for (var i = 1; i <= 5; i++) {
        $scope.addSlide();
    }
    $scope.oneAtATime = true;
    $scope.oneHundredOne = {
        benefits: ['This is benefits1 ', 'This is benefits2 ']
        , markets: ['This is markets1 ', 'This is markets2 ']
        , applications: ['This is applications1 ', 'This is applications2 ']
        , technical_data: [
            {
                pdf: 'https://www.google.com'
                , description: 'This is google bitch'
            }, {
                pdf: 'https://www.yahoo.com'
                , description: 'This is yahoo bitch'
            }
        ]
    };
            }]);
myApp.controller('contactController', ['$scope', '$http', 'vcRecaptchaService', function ($scope, $http, vcRecaptchaService) {
    $scope.model = {
        key: "6Lf5DwcUAAAAAF1dChWB09G-dXjVvOVVjfjmx8lt"
    }
    $scope.reCaptchaResponse = "";
    $scope.setResponse = function (response) {
        $scope.reCaptchaResponse = response;
    };
    var user = {
        "company": ""
        , "firstname": ""
        , "lastname": ""
        , "phone": ""
        , "email": ""
        , "comments": ""
    };
    $scope.submit = function () {
        console.log($scope.user);
        $http({
            method: 'POST'
            , url: '/contactUs'
            , data: $scope.reCaptchaResponse, //forms user object
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function (data) {
            console.log('Got a response');
            $scope.myForm.$setPristine();
            $scope.myForm.$setUntouched();
            $scope.user = angular.copy(user);
        }).error(function (data) {
            console.log("error detected");
        });
    }
}]);
myApp.directive('myTabular', function () {
    return {
        restrict: 'E'
        , scope: {
            tabularInfo: '=info'
        }
        , templateUrl: '/assets/static/lubricants/tabular_template.html'
    };
});
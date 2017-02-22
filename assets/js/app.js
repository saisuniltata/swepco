'use strict';
var myApp = angular.module('myApp', ['ui.bootstrap', 'ui.router', 'vcRecaptcha']);
myApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.when('/books', '/books/home');
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
		abstract: true
		, url: '/lubricants'
		, templateUrl: '/assets/static/lubricants/lubricants.html'
		, controller: 'mainController'
	}).state('lubricants.home', {
		url: '/home'
		, views: {
			'paragraph': {
				templateUrl: '/assets/static/lubricants/home.html'
			}
			, 'tabular': {
				templateUrl: ''
			}
		}
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
	}).state('lubricants.201', {
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
	}).state('lubricants.210', {
		url: '/210'
		, views: {
			'paragraph': {
				templateUrl: '/assets/static/lubricants/210_paragraph.html'
			}
			, 'tabular': {
				templateUrl: '/assets/static/lubricants/210_tabular.html'
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
	}).state('lubricants.201_industrial', {
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
	}).state('contactUs', {
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
	$scope.oneHundredFifteen = {
		benefits: ['Universal usage-one grease for all "H-1" applications ', 'Outstanding performance characteristics in the presence of water and acids', 'Reduced grease consumption', 'Excellent high temperature performance with a dropping point above 450° F(288° C)']
		, markets: ['Food Processing']
		, applications: ['All H-1 required grease applications', 'Food processing equipment', 'Water treatment plants']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_115_food_machinery_grease_sales_brochure_j11199.pdf'
				, description: 'Data Sheet -- English'
					            }
					        ]
	};
	$scope.oneHundredTwentyOne = {
		benefits: ['One grease for all applications – eliminates the need to stock multiple greases', 'Extends bearing life', 'Reduced grease consumption', 'Less grease related downtime', 'Offers superior shear stability']
		, markets: ['Heavy Construction', 'Manufacturing', 'Mining', 'Transportation']
		, applications: ['Bearings of all types – ball, roller, tapered, thrust, needle, ball, screw', 'Journal bearings, bushings, slideways and spherical bearings', 'Greased gearing, chassis, king pins, u-joints, disc brake calipers, fifth wheels, trailer wheel bearings, couplings', 'General manufacturing up to 375°F (190°C) continuous and 450°F (232°C) intermittent', 'Centralized lube systems', 'Low temperature applications as low as –40°F (-40°C)']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_121_tri-plex_universal_grease_sales_brochure_j11915.pdf'
				, description: 'Data Sheet -- English'
					            }
					        ]
	};
	$scope.oneHundredTwentyThree = {
		benefits: ['Unique protection for heavily loaded bearing', 'Unsurpassed EP Performance', 'Superior corrosion protection', 'Low environmental impact', 'Reduced consumption', 'Longer greasing intervals']
		, markets: ['Heavy Construction', 'Industrial Equipment', 'Mining', 'Pulp & Paper']
		, applications: ['Steel mills', 'asphalt plants and paving', 'paper mills', 'plastics, glass and ceramics manufacturing']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_123_ultra_ep_multi-service_grease_sales_brochure_j12281.pdf'
				, description: 'Data Sheet -- English'
					            }
					        ]
	};
	$scope.oneHundredSixtyFive = {
		benefits: ['Gives you a more uniform viscosity over a wide temperature range', 'Helps improve high temperature oxidation and thermal stability', 'Better low temperature performance', 'High performance formulation deliver longer lubricant life']
		, markets: ['Heavy Construction', 'Manufacturing', 'Mining']
		, applications: ['Gate, ball, butterly, triple offset, and knife gate valves', 'Pressure seal, pressre relief and check valves', 'Refineries'
					, 'Chemical, utility, industrial, and steam plants', 'Pipe threads', 'Couplings', 'Water well casing', 'Bull and ring gears']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_165_sales_brochure_j13080.pdf'
				, description: 'Data Sheet -- English'
					            }
					        ]
	};
	$scope.oneHundredSixtyFour = {
		benefits: ['Unmatched protection for exposed gearing', 'Wont build up between gear teeth like asphaltic greases ', 'Eliminates need	for periodic cleaning '
					, 'Lubricates over a wide temperature range', 'Totally unaffected by water, dust, dirt or grit', 'Extends greasing intervals', 'Reduces consumption']
		, markets: ['Heavy Construction', 'Mining']
		, applications: ['Rotary kiln ring gears', 'Crane and shovel swing gears', 'Draglines', 'Logging donkeys', 'Chain and sprocket drives', 'Wind gears'
					, 'Conveyor equipment', 'Winch trucks', 'Rock crushers', 'Hoists']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_164_ultra_ep_open_gear_lube_sales_brochure_j12227.pdf'
				, description: 'Data Sheet -- English'
					            }
					        ]
	};
	$scope.oneHundredThirteen = {
		benefits: ['Ideal for cold weather applications where pumpability is a concern', 'Fluid grease users can now get the many cost-saving anti-friction benefits of Moly in a grease especially formulated for their unique applications'
					, 'Extreme pressure performance, anti-oxidation characteristics, rust and corrosion control, chemical and thermal stability and water resistance make it a highly effective lubricant in a wide variety of demanding applications.']
		, markets: ['Heavy Construction', 'Mining', 'Industrial Equipment']
		, applications: ['Central lube systems', 'Gang mower gear boxes', 'General lubrication', 'Pins, bushings']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_113_moly_fluid_grease_sales_brochure_j11374.pdf '
				, description: 'Data Sheet -- English'
					            }
					        ]
	};
	$scope.fourHundredTwo = {
		benefits: ['Elastic Quality Prevents Dripping', 'Maximum Protection for Severe Service', 'Perfect All-Weather Lubricant', 'Exceptional Versality']
		, markets: ['Industrial Equipment', 'Manufacturing', 'Trucking']
		, applications: ['chain drive', 'air hammers', 'conveyor rollers and spring packs', 'wire cable']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_402_roller_lube_sales_brochure_j11376.pdf'
				, description: 'Data Sheet -- English'
					            }
					        ]
	};
	$scope.oneHundredOne = {
		benefits: ['One grease for all applications', 'Energy savings through friction reduction', 'Reduced grease consumption', 'Extended equipment life']
		, markets: ['Industrial Equipment', 'Manufacturing', 'Mining', 'Trucking']
		, applications: ['Large cranes-lift, clamshell, draglines', 'Heavy weight on the swing gear', 'Roller bearings']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_101_moly_grease_sales_brochure_j11843.pdf'
				, description: 'Data Sheet -- English'
					            }
					        ]
	};
	$scope.oneHundredTwo = {
		benefits: ['Benefits of moly in an economical formulation', 'Friction reduction provides energy savings', 'Reduced grease consumption', 'Extended equipment life']
		, markets: ['Industrial Equipment', 'Agriculture']
		, applications: ['Feed mills', 'General industrial lubrication']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_102_organic_moly_grease_sales_brochure_j08082.pdf'
				, description: 'Data Sheet -- English'
					            }
					        ]
	};
	$scope.oneHundredFour = {
		benefits: ['Multipurpose grease for all applications', 'Smooth buttery consistency provides energy savings through friction reduction', 'Extended equipment life']
		, markets: ['Food Processing', 'Industrial Equipment', 'Manufacturing']
		, applications: ['Kilns', 'Foundries', 'Conveyor bearings']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_104_high_heat_grease_sales_brochure_j04405.pdf'
				, description: 'Data Sheet -- English'
					            }
					        ]
	};
	$scope.oneHundredThree = {
		benefits: ['Excellent performance under the most adverse conditions', 'Fibrous structure builds up a dust shield', 'Helps neutralize acidic mixtures and other corrosive materials', 'Reduced grease consumption'
					, 'Improves energy efficiency and extends equipment life', 'Anti-friction/anti-wear protection from the Moly Powder']
		, markets: ['Heavy Construction', 'Industrial Equipment', 'Mining']
		, applications: ['Bucket pins', 'Chemical processing equipment', 'WWTP aerators, pumps, valves']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_103_moly_hi_plus_grease_sales_brochure_j08443.pdf'
				, description: 'Data Sheet -- English'
					            }
					        ]
	};
	$scope.oneHundredFive = {
		benefits: ['Excellent performance under the most adverse shock and pounding conditions', 'Fibrous structure builds a dust shield', 'Helps neutralize acidic mixtures and other corrosive materials', 'Reduced grease consumption', 'Extended equipment life']
		, markets: ['Agricultural', 'Heavy Construction', 'Industrial Equipment', 'Mining']
		, applications: ['Bucket pins', 'Chemical processing equipment', 'WWTP aerators, pumps, valves']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_105_hi_plus_grease_sales_brochure_j04061.pdf'
				, description: 'Data Sheet -- English'
					            }
					        ]
	};
	$scope.oneHundredTen = {
		benefits: ['Polymer extender makes SWEPCO 110 "stay put"', 'Ideal for cold weather applications where pumpability is a concern', 'Cost-cutting performance']
		, markets: ['Heavy Construction', 'Mining']
		, applications: ['General lubrication', 'Pins, bushings']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_110_shock_resistant_grease_sales_brochure_j08084.pdf'
				, description: 'Data Sheet -- English'
					            }
					        ]
	};
	$scope.oneHundredTwentyThree = {
		benefits: ['Unique protection for heavily loaded bearing', 'Unsurpassed EP Performance', 'Superior corrosion protection', 'Low environmental impact', 'Reduced consumption', 'Longer greasing intervals']
		, markets: ['Heavy Construction', 'Industrial Equipment', 'Mining', 'Pulp & Paper']
		, applications: ['Steel mills', 'asphalt plants and paving', 'paper mills', 'plastics, glass and ceramics manufacturing']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_123_ultra_ep_multi-service_grease_sales_brochure_j12281.pdf'
				, description: 'Data Sheet -- English'
					            }
					        ]
	};
	$scope.twoHundredOne = {
		benefits: ['Reduces gear oil consumption as much as 50-75%', 'Improves equipment performance life, drops operating temperatures 8-18% (29-72øF or 0-22øC)'
, 'Eliminates dry starts', 'Decreases unscheduled downtime', 'High temperature stability for outstanding wear control and cleanliness', 'Energy savings (electrical/fuel)']
		, markets: ['Food Processing', 'Manufacturing', 'Transportation', 'Trucking']
		, applications: ['Industrial gear boxes', 'Standard shift transmissions', 'Differentials']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_201_multi-purpose_gear_lube_sales_brochure_j03567.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.twoHundredTwo = {
		benefits: ['Improve fuel economy in over-the-road service', 'Controls foaming; lowers operating temperatures'
, 'Extends oil life as much as two to three times or more', 'Controls deposits, varnish, corrosion, sludge, rust']
		, markets: ['Automotive', 'Trucking']
		, applications: ['Automotive', 'Heavy Trucks', 'Light Trucks']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_202_sales_brochure_j13065.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.twoHundredTen = {
		benefits: ['Reduces lubricant inventory', 'One oil for transmissions, differentials, power take-offs, and industrial gear boxes'
, 'Improves low temperature lubrication and shifting', 'Helps eliminate lubrication mistakes', 'Reduces energy consumption']
		, markets: ['Industrial Equipment', 'Manufacturing', 'Mining', 'Trucking']
		, applications: ['Over the road trucks, transmissions and differentials', 'Industrial gear boxes']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_210_multi-grade_gear_lube_sales_brochure_j07626_0.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.twoHundredTwelve = {
		benefits: ['Molybdenum Disulfide reduces friction resulting in further energy savings and extended equipment life', 'Reduces lubricant inventory'
, 'One oil for transmissions, differentials, power take-offs, and industrial gear boxes', 'Improves low temperature lubrication and shifting'
, 'Helps eliminate lubrication mistakes']
		, markets: ['Industrial Equipment', 'Manufacturing', 'Mining']
		, applications: ['Over the road trucks, transmissions and differentials', 'Industrial gear boxes']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_212_molyxp_multi-grade_gear_lube_sales_brochure_j12153.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.sevenHundredFiftySeven = {
		benefits: ['USDA/NSF/CFIA H1 Compliant', 'Formulated for a wide range of open and closed gear and bearing applications in food processing plants'
, 'Pure synthesized hydrocarbon base provides thermally stable performance over a wide temperature range', 'State-of-the-art non-toxic additive package'
, 'Excellent H1 anti-wear & extreme pressure characteristics protect heavily loaded equipment from wear', 'Excellent resistance to moisture and acidic conditions common in food & beverage plants'
, 'Outstanding lubricity reduces energy loads', 'Recommended for enclosed gear boxes, gear reducers, drive units, couplings, open gearing, sprockets, chains and oiled bearings'
, 'Compatible with most common seals & paint finishes']
		, markets: ['Food Processing']
		, applications: ['Enclosed gear boxes', 'Gear reducers', 'Drive units', 'Couplings', 'Open gearing', 'Sprockets', 'Chains and oiled bearings']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_757_premium_food_grade_gear_bearing_oil_sales_brochure_j12120.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.twoHundredOneIndustrial = {
		benefits: ['Reduces gear oil consumption as much as 50-75%', 'Improves equipment performance life, drops operating temperatures 8-18% (29-72øF or 0-22øC)'
, 'Eliminates dry starts', 'Decreases unscheduled downtime', 'High temperature stability for outstanding wear control and cleanliness', 'Energy savings (electrical/fuel)']
		, markets: ['Food Processing', 'Manufacturing', 'Transportation', 'Trucking']
		, applications: ['Industrial gear boxes', 'Standard shift transmissions', 'Differentials']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_201_multi-purpose_gear_lube_sales_brochure_j03567.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.twoHundredThree = {
		benefits: ['Reduces gear oil consumption as much as 50-75%', 'Extends equipment life, drops operating temperatures 8-18% (29-82øF or 0-22øC)'
, 'Eliminates dry starts', 'Decreases unscheduled downtime, high temperature stability, outstanding wear control and cleanliness'
, 'Molybdenum Disulfide reduces friction resulting in further energy savings and extended equipment life', 'Quieter operation']
		, markets: ['Heavy Construction', 'Industrial Equipment', 'Manufacturing', 'Mining', 'Trucking']
		, applications: ['Over the road trucks, transmissions and differentials', 'Industrial gear boxes']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_203_molyxp_gear_lube_sales_brochure_j03865.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.sevenHundredSix = {
		benefits: ['Gives a more uniform viscosity over a wide temperature range', 'Improves resistance to high temperature oxidation'
, 'Reduces oil thickening and degredation', 'Helps prevent sludge, varnish and carbon deposits that result from oxidation'
, 'Bonds to metal surfaces to keep moisture and acids from penetrating and attacking', 'Can lower operating temperatures by dispersing foam and releasing trapped heat'
, 'Enables the oil to penetrate the surface for better lubrication', 'Improves film strength of the oil giving it the ability to withstand extreme pressures'
, 'Superior low temperature fluidity and reduced start-up wear']
		, markets: ['Industrial Equipment', 'Marine']
		, applications: ['Gear Boxes & Reducers', 'Journal & Anti-Friction Bearings', 'Geared Couplings', 'Blowers', 'Pumps', 'Air Line Oilers', 'Conveyors', 'Oil Cups'
, 'Drive Chains', 'Mixers & Agitators', 'Presses & Extruders', 'Dryers']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_706_sales_brochure_j12112_0.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.twoHundredTwentyTwo = {
		benefits: ['Superior protection for heavily loaded gearing', 'Unsurpassed EP performance', 'Additional anti-wear protection', 'Makes inspection easier'
, 'Superior corrosion protection', 'Reduced consumption', 'Ease of Application; less cleanup', 'Saves money', 'Includes diluent for easier application']
		, markets: ['Agricultural', 'Heavy Construction', 'Industrial Equipment', 'Lumber/Forestry', 'Manufacturing', 'Mining']
		, applications: ['mines', 'steel mills', 'lumber mills', 'Stevedoring', 'Sand and gravel companies', 'Contractors', 'Loggers', 'Cement plants'
, 'Excavating contractors', 'Farmers', 'Industrial plants', 'Other heavy-duty']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_222_sprayable_ep_open_gear_lube_sales_brochure_j12280.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.threeHundredFive = {
		benefits: ['Long drain service up to 100,000 miles or 600 hours with LOA Program'
, 'Superior friction reduction, cooler operating temperatures, reduced friction and drag, improved fuel economy, and lower octane fuel needed'
, 'Exceeds most engine manufacturers specifications and recommendations, so its one oil for most applications ']
		, markets: ['Agricultural', 'Heavy Construction', 'Transportation', 'Trucking']
		, applications: ['Detroit Diesel engines (trucking and marine)', 'Over the road trucking', 'Heavy equipment', 'Stationary engines (irrigation, oil field service, etc.)']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_305_supreme_formula_engine_oil_sales_brochure_j11925.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.threeHundredSix = {
		benefits: ['Long drain service up to 100,000 miles or 600 hours with LOA Program'
, 'Superior friction reduction, cooler operating temperatures, reduced friction and drag, improved fuel economy and lower octane fuel needed'
, 'Exceeds most engine manufacturers specifications and recommendations, so its one oil	for most applications '
, 'Multi-grade weights give more versatility-one oil can be used for many different viscosity requirements from engine manufacturers or from climatic conditions'
, 'Multi-grades offer better fuel economy or energy savings than single grades']
		, markets: ['Agricultural', 'Heavy Construction', 'Trucking']
		, applications: ['Over the road trucking', 'Heavy equipment', 'Stationary engines (irrigation, oil field service, etc.)']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_306_supreme_formula_engine_oil_sales_brochure_j08346.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.threeHundredEight = {
		benefits: ['Insures more uniform viscosity over a wide temperature range', 'Helps improve high temperature oxidation and thermal stability'
, 'Better low temperature flow characteristics help reduce start-up wear', 'Extends service life'
, 'Meets the requirements of more than one viscosity grade, resulting in a lubricant that bears the benefits of both viscosities'
, 'Made to lubricate effectively over a wider temperature range than a single grade oil allowing you to keep lubrication simple year-round'
, 'Acts as a synergist enhancing the performance of base stock and additives', 'Forms a protective film eliminating premature wear and reducing friction'
, 'Helps improve fuel economy by reducing friction and drag', 'Helps build the film strength required to withstand extreme pressures'
, 'Reduce oil thickening and deposits by as much as 50%; extend oil life'
, 'Help prevent sludge, varnish and carbon deposits that result from oxidation'
, 'Increase ability to neutralize harmful acids and corrosives', 'Lengthen service life'
, 'Builds a chemical bond with the surface to keep moisture and acids from penetrating and attacking the surfaces'
, 'Can lower oil operating temperatures by 25 -50 degrees F by dispersing the foam and releasing the trapped heat'
, 'Enables the oil to penetrate the surface for better lubrication', 'Helps prevent friction and wear', 'Helps prevent metal to metal contact'
, 'Helps keep engine parts clean, neutralizes acids formed during combustion'
, 'Helps keep solid contaminants in the oil in colloidal suspension, preventing sludge and varnish deposits on engine parts'
, 'Gives the oil better low temperature flow characteristics', 'Helps to reduce low temperature start-up wear'
, 'Less high temperature thinning and low temperature thickening', 'Increased "oiliness" provides anti-friction film to reduce fuel consumption'
, 'Works harder for a longer period of time thus easing the cost and your worries about waste oil disposal', 'Can maximize equipment and lubricant life and pinpoint impending problems'
, 'Reduces waste']
		, markets: ['Automotive', 'Trucking']
		, applications: ['Diesel engines']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_308_premium_cj-4_plus_diesel_engine_oil_sales_brochure_j11980_0.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.threeHundredFour = {
		benefits: ['Gives a more uniform viscosity over a wide temperature range', 'Helps improve high temperature oxidation and thermal stability'
, 'Better low temperature flow characteristics help reduce start-up wear', 'Extends service life'
, 'Reduces oil thickening and formation of acids to extend oil service life', 'Helps prevent sludge, varnish and carbon deposits that result from oxidation/ nitration'
, 'Keeps engines cleaner and extends overhaul periods', 'Builds a chemical bond with the surface to keep moisture and acids from penetrating and attacking the surfaces'
, 'Unsurpassed protection from sulfuric acids and corrosion created by digester fuels containing hydrogen sulfide (H2S)'
, 'Maintains a continuous oil film to prevent wear and assist in cooling', 'Enables the oil to penetrate the surface for better lubrication'
, 'Helps prevent friction and wear', 'Protects against valve train wear & scuffing of cylinder bore and piston rings'
, 'Extends overhaul periods and reduces maintenance cost', 'Helps keep engine parts clean and neutralizes acids formed during combustion'
, 'Minimizes port blocking in 2-cycle engines', 'Minimizes ring zone deposits, helping to reduce ring and liner wear'
, 'Helps keep solid contaminants in the oil in colloidal suspension, preventing sludge and varnish deposits on engine parts'
, 'Gives the oil better low temperature flow characteristics', 'Helps to reduce low temperature start-up wear', 'Less high temperature thinning and low temperature thickening'
, 'Works harder for a longer period of time thus easing the cost and worries about waste oil disposal'
, 'Exceeds requirements of all types and models of natural gas engines', 'Reduces inventory and lubrication errors to save you money'
, 'Can maximize the life of the equipment and the life of the lubricant, while pinpointing impending problems'
, '“Fingerprints” oxidation and nitration levels', 'Reduces waste', 'Extends the life of your expensive equipment', 'Reduces waste disposal'
, 'Increases the service life of the oil', 'Reduces labor cost through decreased and simplified maintenance', 'Reduces costly scheduled and unscheduled downtime'
, 'Multi-purpose formulation that reduces inventory and lubrication errors']
		, markets: ['Agricultural', 'Heavy Construction', 'Trucking']
		, applications: ['Dresser-Rand Category III and API CF', 'Specifically designed for Caterpillar, Waukesha and other high-output, highly-turbocharged natural gas engines'
, 'Digester Applications', 'Cogeneration Plants', 'Landfill Applications', 'Stationary Applications', 'Agriculture', 'Compressors', '2-Cycle/4-Cycle Engines'
, '<300 ppm Phosphorous meets most catalyst manufacturers’ requirements']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_304_heavy_duty_low-ash_geo_oil_sales_brochure_j11006.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.threeHundredThree = {
		benefits: ['Superior friction reduction, cooler operating temperatures, reduced friction and drag, improved fuel economy, and lower octane fuel needed']
		, markets: ['Automotive']
		, applications: ['Newer Models calling for the API SN or ILSAC GF-5 service classifications:', 'Gasoline engine cars', 'Sport Utility', 'Vans and light-duty trucks']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_303_premium_multi-grade_automotive_engine_oil_sales_brochure_j11976.pdf'
				, description: 'Data Sheet -- English'
						}
        		]
	};
	$scope.threeHundredThirteen = {
		benefits: ['One oil for most water and air cooled two-cycle gasoline engines', 'Helps eliminate engine deposits which prolong the life and efficiency of the engine', 'Reduces plug fouling']
		, markets: ['Fishing', 'Lumber/Forestry', 'Marine']
		, applications: ['Marine engines', 'Two-cycle grounds maintenance equipment such as mowers, trimmers and blowers']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_313_tc-w3_two-cycle_oil_sales_brochure_j11012.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.threeHundredFourteen = {
		benefits: ['Prolongs Engine Life', 'Clean & Hard Working']
		, markets: ['Lumber/Forestry']
		, applications: ['Two Cycle Engines', 'Two-cycle grounds maintenance equipment such as mowers, trimmers, weed eaters, and blowers']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_314_sales_brochure_j13095.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.fiveHundredTwo = {
		benefits: ['Protects engines against friction, reduces heat and wear, helps eliminate sticking valve lifters', 'reduces hydraulic lifter noise'
, 'Reduces oil consumption', 'Extends engine life']
		, markets: ['Automotive', 'Heavy Construction', 'Trucking']
		, applications: ['High performance automotive repair shops', 'Mobile construction equipment', 'Over the road trucks', 'Fleet operations']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_502_premium_engine_oil_improver_sales_brochure_j03776_0.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.sevenHundredEleven = {
		benefits: ['Extends transission life and reduces the cost of operation', 'Longer seal life and extended drain and service intervals', 'Protect and extends the life of synchronizers', 'Extends component and fluid life', 'Minimizes wear during severe service', 'Reduces wear at cold starts and improves shifting', 'When used with LOA it will lower operating costs', 'Helps to improve fuel economy and lower operating costs']
		, markets: ['Agricultural', 'Automotive', 'Food Storage', 'Heavy Construction', 'Industrial Equipment', 'Mining', 'Transportation', 'Trucking']
		, applications: ['Heavy duty manual transmissions where extended service drain intervals required', 'On highway commercial light trucks', 'On highway heavy duty trucks', 'City buses', 'Vans', 'Delivery vehicles', 'Construction', 'Mining', 'Agriculture']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_711_sales_brochure_j13090.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.sevenHundredTwelve = {
		benefits: ['Insures maximum performance and life for latest generation of high efficiency planetary transmissions requiring Allison® TES-295, TES-468, C-4, Dexron® IIIH, Mercon®, Mercon V®, Jaso 1A or similar fluids', 'For standard or severe service in over-the-road conditions', 'Excellent shear stability, oxidation resistance, friction stability and wear control in extended service', 'Extends drain intervals beyond conventional oils', 'Insures smooth, positive shift quality, even in cold weather', 'Faster warm ups', 'Helps improve fuel economy', 'Unsurpassed protection against deposit formation, varnish, corrosion, sludge, wear and rust', 'Exceeds performance of many OEM branded oils', 'Compatible with common seal and part materials', 'UV dye makes identification of leaks easy']
		, markets: ['Agricultural', 'Automotive', 'Food Storage', 'Government', 'Heavy Construction', 'Lumber/Forestry', 'Transportation', 'Trucking']
		, applications: ['Heavy duty ove-the-road construction equipment', 'City buses', 'Garbage trucks', 'Dump trucks', 'Redi-mix concrete trucks', 'School buses', 'Motor coaches', 'Fire trucks', 'Ambulances', 'Police cars', 'Taxi fleets', 'Light truck and automobile market that requires higher viscosity transmission fluids']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_712_premium_synthetic_multi-service_atf_sales_brochure_j13028.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.sevenHundredFourteen = {
		benefits: ['Lower operating temperatures helps to eliminate sludge, gum, and varnish'
, 'Extreme pressure additive builds the film strength of the oil to keep the oil between the gear teeth'
, 'Improved shift quality, extended transmission life', 'Can replace DEXRON fluids in on-highway applications']
		, markets: ['Heavy Construction', 'Transportation', 'Trucking']
		, applications: ['Heavy duty off-road construction equipment', 'City buses', 'Police cars']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_714_heavy_duty_to-4c4_transmission_fluid_sales_brochure_j11005.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.sevenHundredSeventeen = {
		benefits: ['Superior low temperature fluidity and reduced start-up wear', 'Prevents shrinkage of seals, elastomers, gaskets eliminating leakage and loss of fluid', 'Reduces potential maintenance expense of seal replacement', 'Gives a more uniform viscosity over a wide temperature range', 'Superior thermal stability prevents “varnish” deposits on bearings and gearing', 'Better low temperature flow characteristics to help reduce start-up wear', 'Reduces oil thickening and degredation', 'Helps prevent sludge, varnish and carbon deposits that result from oxidation', 'Keeps impurities harmlessly suspended in fluid and helps clean gum and other harmful deposits', 'Bonds to metal surfaces to keep moisture and acids from penetrating and attacking'
, 'Can lower operating temperatures by dispersing foam and releasing trapped heat', 'Controls fluid level and minimizes loss through vent tube', 'Enables the oil to penetrate the surface for better lubrication', 'Helps prevent metal-to-metal contact and insures longer gear & bearing life', 'Improves film strength of the oil giving it the ability to withstand extreme pressures', 'Reduces gear teeth wear ', 'Increases load carrying capacity ', 'Superior copper corrosion protection and yellow metal compatibility', 'Lengthens drain cycles and reduces maintenance labor and waste oil disposal costs']
		, markets: ['Automotive', 'Trucking']
		, applications: ['Automotive', 'Light Trucks']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_717_synchromesh_transmission_fluid_sales_brochure_j11972.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.sevenHundredNine = {
		benefits: ['One oil to meet the requirements of most major tractor manufacturers'
, 'Provides superior protection for tractor hydraulic systems, transmissions, wet brakes, final drives and power take-off units'
, 'Simplifies maintenance', 'Reduces inventory', 'Helps eliminate lubrication mistakes']
		, markets: ['Agricultural', 'Heavy Construction']
		, applications: ['Farming and construction equipment']
		, technical_data: [
			{
				pdf: 'swepco_709_universal_tractor_fluid_sales_brochure_j05816'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.sevenHundredThirtySeven = {
		benefits: ['Unsurpassed biodegradability -- 96% CEC-L-33-T-82', 'Absolutely non-toxic to aquatic life', 'Does not produce rainbow sheen'
, 'Specifically formulated for improved high temperature resistance, long life service and superior wear control', 'Superior to many petroleum based lubricants in natural lubricity -- 50 lb Timken OK Load'
, 'High VI natural esters with superior oxidative, thermal & hydrolytic stability -- protection to +200°F intermittent'
, 'Excellent low temperature flowability -- won’t clog filters or inhibit lubrication -- good down to <-30°F', 'Superior resistance to foam, rust & corrosion'
, 'Exceeds requirements of major manufacturers']
		, markets: ['Agricultural', 'Lumber/Forestry', 'Marine']
		, applications: ['Hydraulic system']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_737_eco-pro_anti-wear_hydraulic_oil_sales_brochure_j11989.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.sevenHundredFiftyFive = {
		benefits: ['USDA/NSF/CFIA H1 Compliant', 'An extended life hydraulic oil for food grade applications'
, 'Pure synthesized hydrocarbon base provides thermally stable performance over a wide temperature range'
, 'State-of-the-art non-toxic additive package enhances oxidation resistance and anti-wear properties'
, 'Protects pumps, actuators & circulating systems from scuffing, scoring, rust and corrosion'
, 'Excellent resistance to moisture and acidic conditions common in food & beverage plants', 'Outstanding lubricity reduces energy loads'
, 'Compatible with most common seals & paint finishes']
		, markets: ['Food Processing']
		, applications: ['Hydraulic system in food, beverage, meat and poultry processing plants']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_755_premium_food_grade_hydraulic_oil_sales_brochure_j12119.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.sevenHundredThree = {
		benefits: ['One oil for year round performance'
, 'Single inventory formulation simplifies maintenance, thus eliminating lubrication mistakes and reducing inventory'
, 'Low temperature performance characteristics make it ideal for use in the coldest climates'
, 'High temperature oxidation stability gives superior performance', 'High dielectric strength']
		, markets: ['Heavy Construction', 'Industrial Equipment', 'Mining']
		, applications: ['Hydraulic pumps and systems']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_703_synthetic_multi-grade_aw_hydraulic_oil_sales_brochure_j08444.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.sevenHundredFour = {
		benefits: ['Syntheon synthetic base stock blends assure smooth even full power performance over a wide range of temperatures '
, 'Will not readily emulsify', 'Resistance to high temperatures helps eliminate sludge, varnish, and gum build-up in the hydraulic system', 'High dielectric strength']
		, markets: ['Agricultural', 'Heavy Construction', 'Industrial Equipment', 'Mining']
		, applications: ['Hydraulic systems, mobile and stationary', 'Flight simulators']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_704_synthetic_aw_hydraulic_oil_sales_brochure_j04389.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.sevenHundredEight = {
		benefits: ['One oil for a wide range of applications', 'Resistance to emulsification makes it an outstanding oil for rotary compressors and turbines'
, 'DIMONYL friction reducing additive reduces wear and energy requirements ']
		, markets: ['Agricultural', 'Industrial Equipment']
		, applications: ['Industrial pumps', 'Industrial blowers', 'Industrial gear boxes', 'Turbines', 'Air tools']
		, technical_data: [
			{
				pdf: 'http://www.swepcolube.com/sites/default/files/package_inserts/swepco_708_industrial-turbine_oil_sales_brochure_j10590.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.sevenHundredFifty = {
		benefits: ['USDA/NSF/CFIA H1 Compliant', 'Formulated for clean, deposit-free lubrication of rotary screw, rotary vane and reciprocating compressors'
, 'Pure synthesized hydrocarbon base provides thermally stable performance over a wide temperature range'
, 'State-of-the-art non-toxic additive package enhances oxidation resistance and anti-wear properties'
, 'Excellent H1 anti-wear to protect hard working', 'Compressors from wear and downtime'
, 'Excellent resistance to moisture and acidic conditions common in food & beverage plants'
, 'Outstanding lubricity reduces energy loads', 'Compatible with most common seals & paint finishes']
		, markets: ['Food Processing']
		, applications: ['Rotary screw', 'Rotary vane', 'Reciprocating compressors']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_750_premium_food_grade_compressor_oil_sales_brochure_j12118.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.sevenHundredTwo = {
		benefits: ['Decreases downtime', 'Extends life of compressor', 'Reduces power consumption', 'Reduces wear', 'Reduces sludge formation'
, 'Reduces operating temperatures', 'Separates from water', 'Longer oil life-decreases waste oil disposal', 'Lowers maintenance and repair costs']
		, markets: ['Agricultural', 'Heavy Construction', 'Industrial Equipment']
		, applications: ['Air compressors, rotary vane and rotary screw']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_702_synthetic_universal_aw_compressor_oil_sales_brochure_j03774.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.sevenHundredTwentyThree = {
		benefits: ['Extends life of heavily loaded wire rope, cables, drums, sheaves, guides, pulleys, pins and rollers'
, 'Exceptional EP performance (800 kg weld load)', 'Tough, non-drying coating bonds tenaciously to protect from abrasive wear'
, 'Doesn’t build-up or harden like asphalt based products', 'Superior resistance to water, salt spray, acid rain and other corrosives'
, 'Improves load carrying capability', 'Won’t wash or sling off', 'Translucent color permits easier inspection of wire ropes'
, 'Extends lubrication intervals -- Saves labor dollars', 'Apply by brush, swab or pressure lubricators', 'Environmentally responsible'
, 'No hazardous lead, trichloroethylene or offensive odors']
		, markets: ['Fishing', 'Heavy Construction', 'Manufacturing', 'Marine', 'Mining', 'Transportation']
		, applications: ['Cranes', 'Hoists', 'Marine tow and mooring lines', 'Dockside cables', 'Aerial tramways', 'Dredges', 'Draglines', 'Mining', 'Elevators'
, 'Other applications in construction, mining, transportation and manufacturing']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_723_hvg_anti-wear_wire_rope_lubricant_sales_brochure_j12058.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.sevenHundredTwentyFour = {
		benefits: ['Extends life of heavily loaded wire rope, cables, drums, sheaves, guides, pulleys, pins and rollers'
, 'Exceptional EP performance (800 kg weld load)', 'Tough, non-drying coating bonds tenaciously to protect from abrasive wear'
, 'Doesn’t build-up or harden like asphalt based products', 'Superior resistance to water, salt spray, acid rain and other corrosives'
, 'Improves load carrying capability', 'Won’t wash or sling off', 'Translucent color permits easier inspection of wire ropes '
, 'Extends lubrication intervals -- Saves labor dollars', 'Apply by brush, swab or pressure lubricators', 'Environmentally responsible'
, 'No hazardous lead, trichloroethylene or offensive odors']
		, markets: ['Heavy Construction', 'Manufacturing', 'Mining', 'Transportation']
		, applications: ['Cranes', 'Hoists', 'Marine tow and mooring lines', 'Dockside cables', 'Aerial tramways', 'Dredges', 'Draglines', 'Mining', 'Elevators'
, 'Other applications in construction, mining, transportation and manufacturing']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_724_ultra_aw_wire_rope_lubricant_sales_brochure_j12289.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.sevenHundredFifteen = {
		benefits: ['Outstanding performance over wide temperature range', 'Even power transmission without surging', 'Reduced pump squeal', 'Less leakage', 'Longer hose life']
		, markets: ['Automotive', 'Heavy Construction']
		, applications: ['Power steering systems', 'Automotive hydraulic systems']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_715_power_steering-hydraulic_oil_sales_brochure_j11016.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.sevenHundredTwentyNine = {
		markets: ['Industrial Equipment', 'Manufacturing']
		, applications: ['ALL rotary and reciprocating compressor changeovers', 'Any component that has been run on a synthetic oil'
, 'Any component with high mileage, high hours, that is known to be dirty or that has demonstrated performance issues']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_729_premium_flushing_oil_sales_brochure_j12194_0.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.eightHundredOne = {
		benefits: ['Convenient aerosol - spray any way - even straight up'
, 'Penetrates, loosens and dissolves rust, corrosion, paint, dirt, dope, grease', 'Loosens frozen/corroded parts fast with less wait time'
, 'Helps protect against future rust and corrosion', 'Clear formula makes clean-up easier', 'Works as a protective lubricant too'
, 'Perfect for screws, nuts, bolts, allen screws, chains, pins, hinges, clamps and threaded parts of all kinds']
		, markets: ['Agricultural', 'Automotive', 'Fishing', 'Heavy Construction', 'Industrial Equipment', 'Lumber/Forestry', 'Manufacturing', 'Marine', 'Mining'
, 'Pulp & Paper', 'Transportation', 'Trucking']
		, applications: ['Loosening nuts and bolts', 'Freeing rusted parts']
		, technical_data: [
			{
				pdf: 'Page not found'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.eightHundredTwo = {
		benefits: ['One 12-ounce can goes as far as 10 pounds of grease', 'Clean and easy to use']
		, markets: ['Heavy Construction', 'Industrial Equipment', 'Mining']
		, applications: ['Shovels', 'Draglines', 'Gears', 'Asphalt rollers', 'Winches', 'Cables', 'Cams and drill rigs']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_800_aerosol_lubricants_sales_brochure_j03462.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.eightHundredTwo = {
		benefits: ['One 12-ounce can goes as far as 10 pounds of grease', 'Clean and easy to use']
		, markets: ['Heavy Construction', 'Industrial Equipment', 'Mining']
		, applications: ['Shovels', 'Draglines', 'Gears', 'Asphalt rollers', 'Winches', 'Cables', 'Cams and drill rigs']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_800_aerosol_lubricants_sales_brochure_j03462.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.eightHundredThree = {
		benefits: ['Lubricates vital internal surfaces of chains and cables to prolong their life', 'Does not drip or run-simplifies clean up'
, 'Graphite reduces friction and wear, prolonging the life of the chains and cables']
		, markets: ['Agricultural', 'Heavy Construction', 'Industrial Equipment', 'Mining']
		, applications: ['Roller chain', 'Wire rope']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_800_aerosol_lubricants_sales_brochure_j03462.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.eightHundredEight = {
		benefits: ['Highly effective penetrating oil saves time, effort and money'
, 'Helps protect workmen from skinned knuckles and other injures from trying to free frozen bolts']
		, markets: ['Agricultural', 'Heavy Construction', 'Industrial Equipment']
		, applications: ['Loosening nuts and bolts', 'Freeing rusted parts']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_800_aerosol_lubricants_sales_brochure_j03462.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.eightHundredTwelve = {
		benefits: ['Reduces friction and wear', 'Simple and easy to use, gives superior lubrication with the press of a button']
		, markets: ['Industrial Equipment', 'Mining']
		, applications: ['Kiln guns', 'Where dry lubricant is called for']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_800_aerosol_lubricants_sales_brochure_j03462.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.eightHundredFifteen = {
		benefits: ['Superior protection', 'Excellent pumpability', 'High Temperature Performance', 'Acid & Corrosion Resistance', 'Advanced anti-microbial chemistry']
		, markets: ['Agricultural', 'Food Processing', 'Industrial Equipment']
		, applications: ['applications requiring a USDA/NSF H1 or CFIA “n” rated grease where incidental food contact might occur']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_800_aerosol_lubricants_sales_brochure_j03462.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.eightHundredSixteen = {
		benefits: ['Convenient aerosol - spray any way - even straight up', 'NSF H-1 Registered lubricant'
, 'Makes it more difficult for foods and glues to build-up and cause clogging and jams'
, 'Keeps packaging lines moving by making cellophane and other packaging materials slide more easily', 'Makes clean-up faster and easier'
, 'Protects machine parts and surfaces from rust, acids, corrosion']
		, markets: ['Agricultural', 'Food Processing', 'Food Storage']
		, applications: ['applications requiring a USDA/NSF H1 or CFIA “n” rated grease where incidental food contact might occur']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_816_food_grade_silicone_spray_sales_brochure_j13036_0.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
	$scope.eightHundredEighteen = {
		benefits: ['Especially formulated for incidental contact in NSF H1 applications in federally inspected food processing plants'
, 'Convenient aerosol - spray any way - even straight up', 'Penetrates rust, corrosion, residues', 'Loosens frozen/corroded parts fast'
, 'Works as a protective lubricant too', 'Special food grade anti-wear chemistry prolongs part life'
, 'Perfect for screws, nuts, bolts, rollers, slideways, meat hooks, knives, cams, chains and other parts']
		, markets: ['Agricultural', 'Food Processing', 'Food Storage', 'Industrial Equipment']
		, applications: ['applications requiring a USDA/NSF H1 or CFIA “n” rated grease where incidental food contact might occur']
		, technical_data: [
			{
				pdf: 'http://swepcolube.com/sites/default/files/package_inserts/swepco_818_food_grade_penetrating_lubricant_sales_brochure_j13037_0.pdf'
				, description: 'Data Sheet -- English'
            }
        ]
	};
			}]);
myApp.controller('contactController', ['$scope', '$http', 'vcRecaptchaService', function ($scope, $http, vcRecaptchaService) {
	$scope.model = {
		key: '6Lf5DwcUAAAAAF1dChWB09G-dXjVvOVVjfjmx8lt'
	};
	var defaultUser = {
		"company": ""
		, "firstname": ""
		, "lastname": ""
		, "phone": ""
		, "email": ""
		, "comments": ""
		, "myRecaptchaResponse": ""
	};
	$scope.submit = function (user) {
		console.log($scope.user);
		$http({
			method: 'POST'
			, url: '/contactUs'
			, data: $scope.user, //forms user object
			headers: {
				'Content-Type': 'application/json'
			}
		}).success(function (data) {
			var output = '';
			for (var property in data) {
				output += data[property];
			}
			console.log(output);
			$scope.user = angular.copy(defaultUser);
			$scope.myForm.$setPristine();
			grecaptcha.reset();
			$scope.myForm.$setUntouched();
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
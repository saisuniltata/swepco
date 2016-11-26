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
		})
		/*.state('lubricants.305', {
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
			}) */
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
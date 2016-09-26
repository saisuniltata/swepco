var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var nodemailer = require('nodemailer');
var request = require('request');
var generator = require('xoauth2');
var shortid = require('shortid');
var port = process.env.PORT || 3000;
var PUBLIC_KEY = '6Lf5DwcUAAAAAF1dChWB09G-dXjVvOVVjfjmx8lt'
	, PRIVATE_KEY = '6Lf5DwcUAAAAAE8LHG1acRK7X8h7HZ49CdWd5_XU';
var authDetails = {
	user: 'swepcoindia@gmail.com'
	, clientId: '422050930905-rl6hsbvvlv00i4c9qlgenme1plva3j6k.apps.googleusercontent.com'
	, clientsecret: '91HaCadkAhH-yrdt6AHi8DvS'
	, refreshToken: '1/rUEOYGjRIONYHCOSyyC-gGK4N-GSN4LePjRuFNfdKwY'
	, accessToken: 'ya29.Ci9qA3QN2d-uHaYu2Qh1XsdNrTGAhzPZgU8FgjnWR-N6c6lm-vpO74P75y2WGMeudw'
}
var xoauth2gen = generator.createXOAuth2Generator({
	user: authDetails.user
	, clientId: authDetails.clientId
	, clientSecret: authDetails.clientsecret
	, refreshToken: authDetails.refreshToken
	, accessToken: authDetails.accessToken
});
xoauth2gen.getToken(function (err, token, accessToken, timeout) {
	if (err) {
		console.log('Error with generating token' + err);
	}
});
pg.defaults.ssl = true;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use('/', express.static(__dirname));
app.use('/js', express.static(__dirname + '/assets/js'));
app.use('/css', express.static(__dirname + '/assets/css'));
app.use('/fonts', express.static(__dirname + '/assets/fonts'));
app.use('/img', express.static(__dirname + '/assets/img'));
app.use('/lubricants', express.static(__dirname + '/assests/static/lubricants'));
app.get('/*', function (req, res, next) {
	// Just send the index.html for other files to support HTML5Mode
	res.sendFile('index.html', {
		root: __dirname
	});
});
app.post('/contactUs', function (req, res, next) {
			var uniqueid = shortid.generate();
			console.log('First' + req.body);
			var requestQuery = req.body.myRecaptchaResponse;
			if (requestQuery != undefined && requestQuery != '' && requestQuery != null) {
				console.log('inside requestQuery');
				var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + PRIVATE_KEY + "&response=" + req.body['myRecaptchaResponse'] + "&remoteip=" + req.connection.remoteAddress;
				// Hitting GET request to the URL, Google will respond with success or error scenario.
				request(verificationUrl, function (error, response, body) {
						console.log(req.body);
						body = JSON.parse(body);
						// Success will be true or false depending upon captcha validation.
						if (body.success !== undefined && !body.success) {
							return res.json({
								"responseCode": 1
								, "responseDesc": "Failed captcha verification"
							});
						}
						else {
							/*Success fully passed Captcha*/
							pg.connect(process.env.DATABASE_URL, function (err, client) {
									client.query('INSERT into users (req.body.serialcode,req.body.company,req.body.firstname,req.body.lastname,req.body.phone,req.body.email,req.body.comments,Date.now())', function (err, result) {
										if (err) {
											console.log('Error with inserting rows in database' + err);
										}
										else {
											console.log('Rows inserted');
										}
									});
									client.end();
								}
								if (err) throw err; console.log('Connected to postgres! Getting schemas...');
								var transporter = nodemailer.createTransport({
									service: 'gmail'
									, auth: {
										xoauth2: xoauth2gen
									}
								});
								var mailOptions = {
									from: 'Swepco Lubes<swepcolubes@gmail.com>'
									, to: req.body.email
									, subject: 'Swepco lubes'
									, text: 'Hi ' + req.body.firstname + ' ' + req.body.lastname + ',' + 'We have receive your request. Your confimation code is ' + uniqueid + '. We will get back to you shortly.'
									, html: '<p>' + 'Hi ' + req.body.firstname + ' ' + req.body.lastname + ',' + 'We have receive your request. Your confimation code is ' + uniqueid + '. We will get back to you shortly.' + '</p>'
								};
								var mailOptions1 = {
									from: 'Swepco Lubes<swepcolubes@gmail.com>'
									, to: 'swepcoindia@gmail.com'
									, subject: 'Swepco lubes'
									, text: 'Company: ' + req.body.company + ' firstname: ' + req.body.firstname + ' lastname: ' + req.body.lastname + ' phone: ' + req.body.phone + ' email: ' + req.body.email + ' comments: ' + req.body.comments + ' uniqueid: ' + uniqueid
									, html: '<p>' + 'Company: ' + req.body.company + ' firstname: ' + req.body.firstname + ' lastname: ' + req.body.lastname + ' phone: ' + req.body.phone + ' email: ' + req.body.email + ' comments: ' + req.body.comments + ' uniqueid: ' + uniqueid + '</p>'
								}; transporter.sendMail(mailOptions, function (error, info) {
									if (error) {
										console.log('Error occured in sending mail to user' + error);
										res.redirect('/');
									}
									else {
										console.log('Message sent:' + info.response);
										res.json({
											"responseCode": 0
											, "responseDesc": "Success"
										});
										res.end();
									}
								}); transporter.sendMail(mailOptions1, function (error, info) {
									if (error) {
										console.log('Error occured in sending mail to arjun and swepco india' + error);
									}
									else {
										console.log('Email sent:' + info.response);
									}
								}); transporter.close();
							}
						});
				}
				else {
					res.send({
						"responseCode": 1
						, "responseDesc": "Failed captcha verification"
					});
					res.end();
				}
			}); console.log('request body ends');
		//Node Mailer starts
		app.listen(port); console.log("Swepco Server Listening on port 3000");
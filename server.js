var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var nodemailer = require('nodemailer');
var request = require('request');
var generator = require('xoauth2');
var port = process.env.PORT || 3000;
var PUBLIC_KEY = '6Lf5DwcUAAAAAF1dChWB09G-dXjVvOVVjfjmx8lt'
	, PRIVATE_KEY = '6Lf5DwcUAAAAAE8LHG1acRK7X8h7HZ49CdWd5_XU';
var authDetails = {
	user: 'swepcoindia@gmail.com'
	, clientId: '422050930905-rl6hsbvvlv00i4c9qlgenme1plva3j6k.apps.googleusercontent.com'
	, clientsecret: '91HaCadkAhH-yrdt6AHi8DvS'
	, refreshToken: '1/rUEOYGjRIONYHCOSyyC-gGK4N-GSN4LePjRuFNfdKwY'
	, accessToken: 'ya29.Ci9qA7dSLXOCgc3fqK8WBfUx556v1UmCEFIwv7wAADOAiLOYZs7J-JIH4NLezU91zA'
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
		return console.log(err);
	}
	console.log('Token is ' + token);
	console.log('ttl is ' + timeout);
	console.log("Authorization: Bearer " + accessToken);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
//app.use(express.static(__dirname + '/View'));
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
	console.log('inside app post');
	console.log('First' + req.body);
	var requestQuery = req.body.myRecaptchaResponse;
	if (requestQuery != undefined && requestQuery != '' && requestQuery != null) {
		console.log('inside requestQuery');
		var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + PRIVATE_KEY + "&response=" + req.body['myRecaptchaResponse'] + "&remoteip=" + req.connection.remoteAddress;
		// Hitting GET request to the URL, Google will respond with success or error scenario.
		request(verificationUrl, function (error, response, body) {
			console.log('Inside request object');
			body = JSON.parse(body);
			// Success will be true or false depending upon captcha validation.
			if (body.success !== undefined && !body.success) {
				console.log('Failed to authenticate');
				return res.json({
					"responseCode": 1
					, "responseDesc": "Failed captcha verification"
				});
			}
			else {
				console.log("Passed successfully");
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
					, text: req.body.company + req.body.firstname + req.body.lastname + req.body.phone + req.body.email + req.body.comments
					, html: '<p>' + req.body.company + req.body.firstname + req.body.lastname + req.body.phone + req.body.email + req.body.comments + '</p>'
				};
				var mailOptions1 = {
					from: 'Swepco Lubes<swepcolubes@gmail.com>'
					, to: 'arjungalgali@gmail.com, swepcoindia@gmail.com,saisuniltata@gmail.com'
					, subject: 'Swepco lubes'
					, text: req.body.company + req.body.firstname + req.body.lastname + req.body.phone + req.body.email + req.body.comments
					, html: '<p>' + req.body.company + req.body.firstname + req.body.lastname + req.body.phone + req.body.email + req.body.comments + '</p>'
				};
				transporter.sendMail(mailOptions, function (error, info) {
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
				});
				transporter.sendMail(mailOptions1, function (error, info) {
					if (error) {
						console.log('Error occured in sending mail to arjun and swepco india' + error);
					}
					else {
						console.log('Message sent:' + info.response);
					}
				});
				transporter.close();
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
});
console.log('request body ends');
//Node Mailer starts
app.listen(port);
console.log("Swepco Server Listening on port 3000");
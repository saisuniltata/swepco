var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var nodemailer = require('nodemailer');
var request = require('request');
var generator = require('xoauth2');
var port = process.env.PORT || 3000;
var router = express.Router();
var PUBLIC_KEY = '6Lf5DwcUAAAAAF1dChWB09G-dXjVvOVVjfjmx8lt'
	, PRIVATE_KEY = '6Lf5DwcUAAAAAE8LHG1acRK7X8h7HZ49CdWd5_XU';
var google = {
	user: 'swepcoindia@gmail.com'
	, clientId: '46978714862-bihoa2a35ksi077qdh4e0kghb7rrog82.apps.googleusercontent.com'
	, clientsecret: '0lEN0cj3nhfy5qDLZloIh4Wm'
	, refreshToken: '1/sfA6o9CSLEMwJMRW7NXebUGSFYDQ7BkQnCirA1Ig1AQ'
	, accessToken: 'ya29.Ci9pAwu5bLNmyNYp3mpATrTkTmMQnAyptLnJtLi55TkejDyh7sXSTZmTSnjIhc0JJg'
}
var xoauth2gen = generator.createXOAuth2Generator({
	user: google.user
	, clientId: google.clientId
	, clientSecret: google.clientsecret
	, refreshToken: google.refreshToken
	, accessToken: google.accessToken
});
/*xoauth2gen.getToken(function (err, token, accessToken, timeout) {
	if (err) {
		return console.log(err);
	}
	console.log(timeout);
	console.log("Authorization: Bearer " + accessToken);
});*/
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
						xoauth2: generator
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
			}
		});
	}
	else {
		res.send({
			"responseCode": 1
			, "responseDesc": "Failed captcha verification"
		});
	}
});
console.log('request body ends');
//Node Mailer starts
app.listen(port);
console.log("Swepco Server Listening on port 3000");
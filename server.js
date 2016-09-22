var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
var router = express.Router();
var nodemailer = require('nodemailer');
var request = require('request');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//app.use(express.static(__dirname + '/View'));
app.use('/', express.static(__dirname));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});
app.post('/contactUs', function (req, res, next) {
    console.log('started');
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        console.log('inside if');
        return res.json({
            "responseCode": 1
            , "responseDesc": "Please select captcha"
        });
    }
    console.log('passed if');
    // Put your secret key here.
    var secretKey = "6Lf5DwcUAAAAAE8LHG1acRK7X8h7HZ49CdWd5_XU";
    // req.connection.remoteAddress will provide IP address of connected user.
    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
    // Hitting GET request to the URL, Google will respond with success or error scenario.
    request(verificationUrl, function (error, response, body) {
        console.log('inside request');
        body = JSON.parse(body);
        // Success will be true or false depending upon captcha validation.
        if (body.success !== undefined && !body.success) {
            console.log('body unsuccessful');
            return res.json({
                "responseCode": 1
                , "responseDesc": "Failed captcha verification"
            });
        }
        res.json({
            "responseCode": 0
            , "responseDesc": "Sucess"
        });
    });
    console.log(req.body.email);
    console.log('request body ends');
    var transporter = nodemailer.createTransport({
        service: 'yahoo'
        , auth: {
            user: 'sunil_fire_ice@yahoo.com'
            , pass: 'S#2303unil'
        }
        , tls: {
            rejectUnauthorized: false
        }
    });
    var mailOptions = {
        from: 'Swepco Lubes<sunil_fire_ice@yahoo.com>'
        , to: req.body.email
        , subject: 'Swepco lubes'
        , text: 'Swepco testing text'
        , html: '<p>Swepco testing text</p>'
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.redirect('/');
        }
        else {
            console.log('Message sent:' + info.response);
            res.redirect('/contactUs');
        }
    })
});
app.listen(port);
console.log("Node Server Listening on port 3000");
var express = require('express');
var Recaptcha = require('recaptcha').Recaptcha;
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
var router = express.Router();
var nodemailer = require('nodemailer');
var request = require('request');
var PUBLIC_KEY = '6Lf5DwcUAAAAAF1dChWB09G-dXjVvOVVjfjmx8lt'
    , PRIVATE_KEY = '6Lf5DwcUAAAAAE8LHG1acRK7X8h7HZ49CdWd5_XU';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//app.use(express.static(__dirname + '/View'));
app.use('/', express.static(__dirname));
app.get('/*', function (req, res) {
    var recaptcha = new Recaptcha(PUBLIC_KEY, PRIVATE_KEY);
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});
app.post('/contactUs', function (req, res, next) {
    console.log('started');
    console.log(req.body);
    var data = {
        remoteip: req.connection.remoteAddress
        , challenge: req.body.recaptcha_challenge_field
        , response: req.body.recaptcha_response_field
    };
    var recaptcha = new Recaptcha(PUBLIC_KEY, PRIVATE_KEY, data);
    recaptcha.verify(function (success, error_code) {
        if (success) {
            console.log('request body ends');
            //Node Mailer starts
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
        }
    });
});
app.listen(port);
console.log("Node Server Listening on port 3000");
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
var router = express.Router();
var nodemailer = require('nodemailer');
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
    /*    var transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth:{
            user:'sunil_fire_ice@yahoo.com',
            pass:'S#2303unil'
        },
        tls :{
            rejectUnauthorized: false
        }
    });
    var mailOptions = {
        from: 'Swepco Lubes<sunil_fire_ice@yahoo.com>',
        to: req.body.email,
        subject: 'Swepco lubes',
        text: 'Swepco testing text',
        html: '<p>Swepco testing text</p>'       
    };
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
            res.redirect('/');
        }
        else{
            console.log('Message sent:'+info.response);
            res.render('/contactUs');
        }
    })*/
    res.redirect('/home');
});
app.listen(port);
console.log("Node Server Listening on port 3000");
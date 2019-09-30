let express = require('express')
const app = express();
var cors = require('cors');
let nodeMailer = require('nodemailer')
let port = process.env.PORT || 5000;
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.listen(port);
var router = express.Router();
console.log("Started on port " + port)
app.post('/mail/send', function (req, res) {
    console.log(req.body)
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            // should be replaced with real sender's account
            user: '',
            pass: ''
        }
    });
    let mailOptions = {
        // should be replaced with real recipient's account
        to: '',
        subject: req.body.subject,
        text: req.body.message,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    res.end();
  });
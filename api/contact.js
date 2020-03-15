import express from 'express'
import nodemailer from 'nodemailer'
import axios from 'axios'

let hbs = require('nodemailer-express-handlebars')
let mailConfig = require('./mail-config.json')

const app = express()

app.use(express.json())
app.post('/contact', (req, res) => {
    // Validate, sanitize and send 
    let response = req.body.data.token
    let secret = ''

    axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${response}`).then((result) => {
      if (result.data.success) { 
        sendMail(req.body.data.name, req.body.data.email, req.body.data.phone, req.body.data.subject, req.body.data.message)
        res.status(200).json({ 'message': 'OH YEAH' })
      } else {
        res.status(500).json({ 'message': 'Something went wrong' })
      }
    })
})                                                           

const sendMail = function (name, from, phone, subject, message) {

  //set up transporter using nodemailer
  let transporter = nodemailer.createTransport({
    host: mailConfig.host,
    port: mailConfig.port,
    auth: {
      user: mailConfig.user,
      pass: mailConfig.password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  //set up mail templates
  transporter.use('compile', hbs({
    viewEngine: {
      partialsDir:  './api/templates/',
      defaultLayout: false
    },
    viewPath: './api/templates/'
  }))

  //set up form mail
  let formMail = {
    from: name + ' ' + mailConfig.info,
    to: mailConfig.info  ,
    subject: subject,
    template: "form-email",
    context: {
      name: name,
      phone: phone,
      from: from,
      message: message,
      subject: subject
    }
  }

  //set up confirm mail
  let confirmMail = {
    from: 'veiligzwangerambacht ' + mailConfig.noreply,
    to: from,
    subject: 'Bevestiging',
    template: "confirm-email",
    context: {
      name: name,
      phone: phone,
      from: from,
      message: message,
      subject: subject
    },
    attachments: [{
      filename: 'mailheader.jpg', 
        path: __dirname + '/templates/mailheader.jpg',
        cid: 'mailheader'
    }, {
      filename: 'Sandra.png', 
        path: __dirname + '/templates/Sandra.png',
        cid: 'sandra'
    }],
  }

  transporter.sendMail(formMail, function (err, info) {
    if (err) {
      console.log(err);
      return err
    }
    else {
      console.log("Email sent", info);
      transporter.sendMail(confirmMail)
    }
  })
}

export default {
  path: '/api',
  handler: app
}
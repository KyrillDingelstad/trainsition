import express from 'express'
import nodemailer from 'nodemailer'

let hbs = require('nodemailer-express-handlebars')
let mailConfig = require('./mail-config.json')

const app = express()

app.use(express.json())
app.post('/contact', (req, res) => {
    // Validate, sanitize and send
    sendMail(req.body.data.name, req.body.data.email, req.body.data.phone, req.body.data.subject, req.body.data.message)
    res.status(200).json({ 'message': 'OH YEAH' })
      
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
    to: from,
    subject: subject,
    template: "form-email",
    context: {
      name: name,
      phone: phone,
      message: message
    }
  }

  //set up confirm mail
  let confirmMail = {
    from: 'veiligzwangerambacht ' + mailConfig.info,
    to: from,
    subject: 'Bevestiging',
    template: "confirm-email",
    context: {
      name: name,
      phone: phone,
      message: message
    },
    attachments: [{
      filename: 'mailheader.jpg; Sandra.png', 
        path: __dirname + '/templates/mailheader.jpg; /templats/Sandra.png',
        cid: 'imagename'
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
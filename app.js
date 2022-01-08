const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
//const bodyParser = require('body-parser');


let emailAdd = 'alerting12@gmail.com'
let emailPass = 'Freakazoide1988!'

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('public'));
app.use(express.json())
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res)=>{
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailAdd,
      pass: emailPass
    }
  });
  
  var mailOptions = {
    from: emailAdd,
    to: "nate@elevaresolutions.com",
    subject: 'Sending Email using Node.js',
    text: JSON.stringify(req.body)
  }
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send('error')
    } else {
      console.log('Email sent: ' + info.response);
      res.send('success')
    }
  });

})

app.listen(PORT,()=>{
  console.log('Server running')
})
















const express = require('express');
const bodyParser = require('body-parser');
let PORT = process.env.PORT || 3000;
var rp = require('request-promise');

const router = express.Router();
const sgMail = require('@sendgrid/mail');

const sendgridAPI = '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';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
let Nexmo = require('nexmo');

//2checkout
var Twocheckout = require('2checkout-node');
var http = require('http');


const nexmo = new Nexmo({
    apiKey: 'c85a2801',
    apiSecret: 'sAti1pC5RtEutmww'
})




//SEND VIA NEXMO
router.post('/sms', (req, res) => {
    //request 
    console.log(`hit`)
    let sender = req.body; //  mobile, message
    console.log(sender)
    const from = sender.from || 'BLOOM.PK';
    // const to = '971555445029';
    const to = sender.to || '971555445029';
    const text = sender.text || 'Welcome to Bloom.PK Thankyou for registering with us, we are glad to do business.';

    nexmo.message.sendSms(from, to, text, (response) => {
        console.log(response);
        res.json(response);
    });


})



router.post('/email', (req, res) => {
    let sender = req.body; //to,from, subject, text, html
    const msg = {
        to: sender.to,
        from: sender.from,
        subject: sender.subject,
        text: sender.text,
        html: sender.html,
    };
    sgMail.send(msg).then(res => {
        console.log(res);
        res.json({
            success: true,
            message: 'Message sent.'
        })
    }, err => {
        res.json({
            success: false,
            message: 'Error sending message'
        })
    })
})




router.post('/payment', (request, response) => {

    //sender --> token,phone,email

    let sender = request.body;
    var tco = new Twocheckout({
        sellerId: "250103826811",                                  // Seller ID, required for all non Admin API bindings 
        privateKey: "64BC2C52-7B50-4B41-9936-B15FC4A7D86A",                              // Payment API private key, required for checkout.authorize binding
        sandbox: true                                                   // Uses 2Checkout sandbox URL for all bindings
    });

    var params = {
        "merchantOrderId": "123",
        "token": sender.token,
        "currency": "USD",
        "total": sender.total,
        "billingAddr": {
            "name": "Bloom.pk",
            "addrLine1": "123 Test St",
            "city": "Columbus",
            "state": "Ohio",
            "zipCode": "43123",
            "country": "USA",
            "email": sender.email,
            "phoneNumber": sender.phone
        }
    };

    tco.checkout.authorize(params, function (error, data) {
        if (error) {
            response.json({
                success: true,
                message: error.message
            });
        } else {
            response.json({
                success: false,
                message: data.response.responseMsg
            });
        }
    });



})


router.get('/test', (req, res) => {
    res.json({
        success: false,
        message: 'BLOOM API IS WORKING YESS!'
    })
})



module.exports = router;



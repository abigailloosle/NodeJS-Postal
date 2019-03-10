const express = require('express')
const app = express()
const port = 3000
const url = require('url');

function calculateRate(req, res) {
    calc = url.parse(req.url, true)
    
    weight = calc.query.weight
    
    mail = calc.query.mail

    if (mail === "letterS") {
        mail = "Letters (Stamped)";
        if (weight < 1) {
            weight = "less than 1 oz"
            cost = 0.55
        } else if (weight < 2) {
            weight = "less than 2 oz"
            cost = 0.70
        } else if (weight < 3) {
            weight = "less than 3 oz"
            cost = 0.85
        } else {
            weight = "more than 3 oz"
            cost = 1.00
        }
    } else if (mail === "letterM") {
        mail = "Letters (Metered)";
        if (weight < 1) {
            cost = 0.5;
        } else if (weight < 2) {
            cost = 0.65
        } else if (weight < 3) {
            cost = 0.80
        } else {
            cost = 0.95
        }
    } else if (mail === "large") {
        mail = "Large Envelopes (Flats)";
        if (weight < 1) {
            cost = 1.00;
        } else if (weight < 2) {
            cost = 1.15
        } else if (weight < 3) {
            cost = 1.30
        } else if (weight < 4) {
            cost = 1.45
        } else if (weight < 5) {
            cost = 1.60
        } else if (weight < 6) {
            cost = 1.75
        } else if (weight < 7) {
            cost = 1.90
        } else if (weight < 8) {
            cost = 2.05
        } else if (weight < 9) {
            cost = 2.20
        } else if (weight < 10) {
            cost = 2.35
        } else if (weight < 11) {
            cost = 2.50
        } else if (weight < 12) {
            cost = 2.65
        } else {
            cost = 2.80
        } 
    } else {
        mail = "First-Class Package Service—Retail";
        if (weight < 4) {
            cost = 3.66;
        } else if (weight < 8) {
            cost = 4.39
        } else if (weight < 12) {
            cost = 5.19
        } else {
            cost = 5.71
        } 
    };
    
    res.render('results.ejs' , {
        weight: weight,
        type: mail,
        cost: cost
    })
}

app.set('view engine', 'ejs')
   .set('views', './')
   .get('/', function(req,res) { res.render('index.ejs') })
   .get('/getRate', calculateRate)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
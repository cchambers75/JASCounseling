const express = require('express');
const app = express();
const ejs = require('ejs');
const ejsLayouts = require('express-ejs-layouts');
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(ejsLayouts);
app.set('view engine', 'ejs');

//sets static folder for styles and other things
app.use(express.static(__dirname + '/public'));

//Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/home', (req, res) => {
    res.render('index');
});

//About section routes
app.get('/about_me', (req, res) => {
    res.render('aboutMe');
});

app.get('/experience', (req, res) => {
    res.render('experience');
});

//Philosophy route
app.get('/philosophy', (req, res) => {
    res.render('philosophy');
});

//Getting started routes
app.get('/where_to_begin', (req, res) => {
    res.render('beginning');
});

app.get('/rates_insurance', (req, res) => {
    res.render('ratesInsurance');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
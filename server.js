const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(session({
    secret:'loanapp',
    resave:false,
    saveUninitialized:false
}));


function isAuthenticated(req, res, next) {

    if (req.session.user) {
        return next();
    }

    res.redirect('/login');

}

function isGuest(req, res, next) {

    if (req.session.user) {
        return res.redirect('/dashboard');
    }

    next();

}

app.use('/auth',authRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/login', isGuest, (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.get('/signup', isGuest, (req, res) => {
    res.sendFile(path.join(__dirname, 'views/signup.html'));
});

app.get('/dashboard', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'views/dashboard.html'));
});

app.get('/logout', (req, res) => {

    req.session.destroy(() => {
        res.clearCookie('connect.sid');
        res.redirect('/login');
    });

});





app.listen(3000,()=>{
    console.log("Server running http://localhost:3000");
});
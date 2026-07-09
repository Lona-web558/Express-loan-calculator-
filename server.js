const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const authRoutes = require('./auth');

const app = express();

app.use(express.static(__dirname));
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
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', isGuest, (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/signup', isGuest, (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'));
});

app.get('/dashboard', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
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

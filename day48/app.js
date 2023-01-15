// node day47/app.js

const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/currenttime', function (request, response) {
    response.send('<h1>' + new Date().toISOString() + '</h1>');
}); // localhost:3000/currenttime

app.get('/', function (request, response) {
    response.send('<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></form>');
});

app.post('/store-user', function (request, response) {
    const userName = request.body.username;
    console.log(userName);
    response.send('<h1>Username stored!</h1>');
});

app.listen(3000);
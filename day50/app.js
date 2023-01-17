const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.get('/', function (request, response) {
    const htmlFilePath = path.join(__dirname, 'views', 'index.html');
    response.sendFile(htmlFilePath);
});

app.get('/restaurants', function (request, response) {
    const htmlFilePath = path.join(__dirname, 'views', 'restaurants.html');
    response.sendFile(htmlFilePath);
});

app.get('/about', function (request, response) {
    const htmlFilePath = path.join(__dirname, 'views', 'about.html');
    response.sendFile(htmlFilePath);
});

app.get('/confirm', function (request, response) {
    const htmlFilePath = path.join(__dirname, 'views', 'confirm.html');
    response.sendFile(htmlFilePath);
});

app.get('/recommend', function (request, response) {
    const htmlFilePath = path.join(__dirname, 'views', 'recommend.html');
    response.sendFile(htmlFilePath);
});

app.post('/recommend', function (request, response) {
    const restaurant = request.body;
    const filePath = path.join(__dirname, 'data', 'restaurants.json');

    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    storedRestaurants.push(restaurant);

    fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

    response.redirect('/confirm');
});

app.listen(3000);
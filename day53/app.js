const fs = require('fs');
const path = require('path');

const express = require('express');
const uuid = require('uuid');

const resData = require('./util/restaurant-data');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.get('/', function (request, response) {
    response.render('index');
});

app.get('/restaurants', function (request, response) {
    const storedRestaurants = resData.getStoredRestaurants();

    response.render('restaurants', { numberOfRestaurants: storedRestaurants.length, restaurants: storedRestaurants });
});

app.get('/restaurants/:id', function (request, response) {
    const restaurantId = request.params.id;
    const storedRestaurants = resData.getStoredRestaurants();

    for (const restaurant of storedRestaurants) {
        if (restaurant.id === restaurantId) {
            return response.render('restaurant-detail', { restaurant: restaurant });
        }
    }

    response.status(404).render('404');
});

app.get('/about', function (request, response) {
    response.render('about');
});

app.get('/confirm', function (request, response) {
    response.render('confirm');
});

app.get('/recommend', function (request, response) {
    response.render('recommend');
});

app.post('/recommend', function (request, response) {
    const restaurant = request.body;
    restaurant.id = uuid.v4();
    const restaurants = resData.getStoredRestaurants();

    restaurants.push(restaurant);

    storeRestaurants(restaurants);

    response.redirect('/confirm');
});

app.use(function (request, response) {
    response.status(404).render('404');
});

app.use(function (error, request, response, next) {
    response.status(500).render('500');
});

app.listen(3000);
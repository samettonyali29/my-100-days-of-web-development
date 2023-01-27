const express = require('express');
const uuid = require('uuid');

const resData = require('../util/restaurant-data');

const router = express.Router();

router.get('/restaurants', function (request, response) {
    const storedRestaurants = resData.getStoredRestaurants();

    response.render('restaurants', { numberOfRestaurants: storedRestaurants.length, restaurants: storedRestaurants });
});

router.get('/restaurants/:id', function (request, response) {
    const restaurantId = request.params.id;
    const storedRestaurants = resData.getStoredRestaurants();

    for (const restaurant of storedRestaurants) {
        if (restaurant.id === restaurantId) {
            return response.render('restaurant-detail', { restaurant: restaurant });
        }
    }

    response.status(404).render('404');
});

router.get('/confirm', function (request, response) {
    response.render('confirm');
});

router.get('/recommend', function (request, response) {
    response.render('recommend');
});

router.post('/recommend', function (request, response) {
    const restaurant = request.body;
    restaurant.id = uuid.v4();
    const restaurants = resData.getStoredRestaurants();

    restaurants.push(restaurant);

    storeRestaurants(restaurants);

    response.redirect('/confirm');
});

module.exports = router;
const express = require('express');
const uuid = require('uuid');

const resData = require('../util/restaurant-data');

const router = express.Router();

router.get('/restaurants', function (request, response) {
    let order = request.query.order;
    let nextOrder = 'desc';

    if (order !== 'asc' && order !== 'desc') {
        order = 'asc';
    }

    if (order === 'desc') {
        nextOrder = 'asc';
    }

    const storedRestaurants = resData.getStoredRestaurants();

    storedRestaurants.sort(function (resA, resB) {
        if ((order === 'asc' && resA.name > resB.name) || 
            (order === 'desc' && resB.name > resA.name)) {
            return 1;
        } 
        return -1;
    });

    response.render('restaurants', { numberOfRestaurants: storedRestaurants.length, restaurants: storedRestaurants, nextOrder: nextOrder });
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
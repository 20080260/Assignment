'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const carlist = require('./controllers/carlist.js');

router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
router.get('/carlist/:id', carlist.index);
router.get('/carlist/:id/deletevehicle/:vehicleid', carlist.deleteVehicle);
router.get('/dashboard/deletecarlist/:id', dashboard.deleteCarlist);

module.exports = router;

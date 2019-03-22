'use strict';

const logger = require('../utils/logger');
const carlistStore= require('../models/carlist-store');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Carlist Dashboard',
      carlist: carlistStore.getAllCarlists(),
    };
    logger.info('about to render', carlistStore.getAllCarlists());
    response.render('dashboard', viewData);
  },
  deleteCarlist(request, response) {
    const carlistId = request.params.id;
    logger.debug(`Deleting Garage ${carlistId}`);
    carlistStore.removeCarlist(carlistId);
    response.redirect('/dashboard');
  },
};

module.exports = dashboard;
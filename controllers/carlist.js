'use strict';

const logger = require('../utils/logger');
const carlistStore = require('../models/carlist-store');

const carlist = {
  index(request, response) {
    const carlistId = request.params.id;
    logger.debug('Carlist id = ', carlistId);
    const viewData = {
      title: 'Carlist',
      carlist: carlistStore.getCarlist(carlistId),
    };
    response.render('carlist', viewData);
  },
  deleteVehicle(request, response) {
    const carlistId = request.params.id;
    const vehicleId = request.params.vehicleid;
    logger.debug(`Deleting Vehicle ${vehicleId} from Garage ${carlistId}`);
    carlistStore.removeVehicle(carlistId, vehicleId);
    response.redirect('/carlist/' + carlistId);
  },
};

module.exports = carlist;
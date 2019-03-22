'use strict';

const _ = require('lodash');

const carlistStore = {

  carlistCollection: require('./carlist-store.json').carlistCollection,

  getAllCarlists() {
    return this.carlistCollection;
  },

  getCarlist(id) {
    return _.find(this.carlistCollection, { id: id });
  },
  
  removeVehicle(id, vehicleId) {
    const carlist = this.getCarlist(id);
    _.remove(carlist.vehicles, { id: vehicleId });
  },
  
  removeCarlist(id) {
  _.remove(this.carlistCollection, { id: id });
  },
  
};

module.exports = carlistStore;
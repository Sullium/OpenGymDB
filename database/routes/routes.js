'use strict';

module.exports = function(app) {
  var gymEquipmentList = require('../controllers/controller');

	app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); // what does this do?
	});

  // URL Endpoint Routes
  app.route('/api/v1/gym_equipment')
    .get(gymEquipmentList.list_gym_equipment)
    .post(gymEquipmentList.create_gym_equipment); // why POST and not PUT?

  app.route('/api/v1/gym_equipment/:id')
    .get(gymEquipmentList.get_gym_equipment)
    .put(gymEquipmentList.update_gym_equipment) // why PUT and not POST?
    .delete(gymEquipmentList.delete_gym_equipment);
};

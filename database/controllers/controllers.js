  
'use strict';

var mongoose = require('mongoose');
var Gym_Equipment = mongoose.model('Gym Equipment'); // defined in model.js

exports.list_gym_equipment = function(req, res) {
  Gym_Equipment.find({}, function(err, gym_equipment) {
    if (err)
      res.send(err);
    res.json(gym_equipment);
  });
};

exports.get_gym_equipment = function(req, res) {
  Gym_Equipment.findById(req.params.id, function(err, gym_equipment) {
    if (err)
      res.send(err);
    res.json(gym_equipment);
  });
};

exports.update_gym_equipment = function(req, res) {
  Gym_Equipment.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, gym_equipment) {
    if (err)
      res.send(err);
    res.json(gym_equipment);
  });
};

exports.delete_gym_equipment = function(req, res) {
  Gym_Equipment.remove({
    _id: req.params.id
  }, function(err, gym_equipment) {
    if (err)
      res.send(err);
    res.json({ message: 'Gym equipment successfully deleted' });
  });
};

exports.create_gym_equipment = function(req, res) {
  var gym_equipment = new Gym_Equipment(req.body);
  gym_equipment.save(function(err, gym_equipment) {
    if (err)
      res.send(err);
    res.json(gym_equipment);
  });
};

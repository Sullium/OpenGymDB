'use strict'; // all variables must be declared

var mongoose = require('mongoose');

var GymEquipment = new mongoose.Schema({
  slot{
		Created_date{
			type: date,
			default: Date.now
		},
		date{
			type: String,
			required: 'Date of the Slot'
		},
		time{
			type: String,
			required: 'Start-End'
		},
		station{
			name{
				type: String,
				required: 'Equipment Name'
			},
			stationType{
				type: String,
				required: 'Type of equipment?'
			}
		},
		reserverName{
			type: String,
			required: 'Name of reserever'
		},
		isTaken{
			type: Boolean,
			required: 'true if reserved'
		}
	});

module.exports = mongoose.model('Gym Equipment', GymEquipmentSchema);

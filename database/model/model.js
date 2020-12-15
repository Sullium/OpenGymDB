'use strict'; // all variables must be declared

var mongoose = require('mongoose');
/*
var GymEquipmentSchema = new mongoose.Schema({
  slot: {
		Created_date: {
			type: Date,
			default: Date.now
		},
		date: {
			type: String,
			required: true //'Date of the Slot'
		},
		time: {
			type: String,
			required: true //'Start-End'
		},
		station: {
			name: {
				type: String,
				required: true //'Machine/Equipment Name'
			},
			stationType: {
				type: String,
				required: true //'Type of Macine/Equipment'
			}
		},
		reserverName: {
			type: String,
			required: true //'Name of reserever'
		},
		isTaken: {
			type: Boolean,
			required: true //'true if reserved'
		}
	}
});
*/

var GymEquipmentSchema = new mongoose.Schema({
	station: {
		name: {
			type: String,
			required: true
		},
		stationType:{
			type: String,
			required: true
		}
	},
	slot: [
		{
		date: {
			type: String,
			required: true
		},
		time: {
			type: String,
			required: true
		},
		reserverName: {
			type: String,
			required: true
		},
		isTaken: {
			type: Boolean,
			required: true
		}
		}
	],
	Created_date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Gym Equipment', GymEquipmentSchema);

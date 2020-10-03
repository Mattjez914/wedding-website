const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

module.exports = mongoose.model('Guest',
	new mongoose.Schema({
		firstName: {
			type:		String,
			required:	true,
		},
		lastName: {
			type:		String,
			required:	true,
        },
        attending: {
            type:       Boolean,
            default:    null
        },
		address: {
            type:	mongoose.Schema.Types.ObjectId,
            ref:	'Address',
        },
        phone: {
            type:		String,
            default:    null
        },
        email: {
            type:		String,
            default:    null
		},
		dateAdded: {
			type:		Date,
			required:	true,
			default:	Date.now,
		},
	}).plugin(uniqueValidator)
);
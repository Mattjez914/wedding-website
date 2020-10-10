const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

module.exports = mongoose.model('GuestGroup',
	new mongoose.Schema({
		groupAlias: {
			type:		String,
			required:	true,
		},
		guests: [{
            type:	mongoose.Schema.Types.ObjectId,
            ref:	'Guest',
		}],
		address: {
            type:	mongoose.Schema.Types.ObjectId,
            ref:	'Address',
        },
        phone: {
            type:		String,
            default:    null,
        },
        email: {
            type:		String,
            default:    null,
		},
		dateAdded: {
			type:		Date,
			required:	true,
			default:	Date.now,
		},
		dateUpdated: {
			type:		Date,
			required:	true,
			default:	Date.now,
		}
	}).plugin(uniqueValidator)
);
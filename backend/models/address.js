const	mongoose	= require('mongoose');

module.exports = mongoose.model('Address',
	new mongoose.Schema({
		street: {
			type:			String,
			default:	null,
		},
		city: {
			type:			String,
			default:	null,
		},
		state: {
			type:			Date,
			default:	null,
		},
		zip: {
			type:			Date,
			default:	null,
		},
		country: {
			type:			Date,
			default:	null,
		},
		dateAdded: {
			type:			Date,
			required:	true,
			default:	Date.now,
		},
	}),
);
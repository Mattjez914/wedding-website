const mongoose = require('mongoose');
const env = require('dotenv').config();

mongoose.connect(process.env.MONGO_URL,{
	useUnifiedTopology:	false,
	useNewUrlParser:		true,
	useCreateIndex:			true,
	useFindAndModify:		false,
}).then(() => {
	console.log(`[${knktu.getDatetimeString()}] [MongoDB] Connected to the database... ${process.env.MONGO_URL}`);
}).catch(error => {
	console.log(`[${knktu.getDatetimeString()}] [MongoDB] Error connecting to the database... Error: ${error}`);
});

module.exports = {
	Guest:										require('./guest'),
	connection:							mongoose,
}
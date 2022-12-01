const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
//import routes *important folders
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const sitRoute = require('./routes/sit');

//
dotenv.config();
app.use(express.json());

mongoose
	.connect(process.env.MONGO_URL)
	.then(console.log('connected to mongodb'))
	.catch((err) => {
		console.log(err);
	});

app.use('/api/auth', authRoute); // MEANS x LOCALHOST:5000 + /API/AUTH + /REGISTER (OF AUTH.JS/authRoute) & USING POST METHOD IN POSTMAN
app.use('/api/users', userRoute); // THESE LINES WILL CREATE A FOLDER IN MONGODB TO STORE DATA, automatically add 's' always plural tho we set single
app.use('/api/posts', postRoute);

//----------------------------------------------------------
app.listen('5000', () => {
	console.log('Backend is running.');
});

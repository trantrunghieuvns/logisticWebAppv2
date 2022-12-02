const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
//import routes *important folders
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const path = require('path');
//
dotenv.config();
app.use(express.json());
//PUBLIC THE IMAGES FOLDER
app.use('/images', express.static(path.join(__dirname, '/images')));
//CONNECT TO MONGODB
mongoose
	.connect(process.env.MONGO_URL)
	.then(console.log('connected to mongodb'))
	.catch((err) => {
		console.log(err);
	});

//IMAGE UPLOADER
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './images'); // LOCATION OF STORING IMGS
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	},
});

const upload = multer({ storage: storage });

//POST METHOD FOR IMAGE UPLOAD
app.post('/api/upload/', upload.single('file'), (req, res) => {
	res.status(200).json('file has been uploaded successfully');
});

//USE METHOD
app.use('/api/auth/', authRoute); // LOCALHOST:5000 + /API/AUTH + /REGISTER (OF AUTH.JS/authRoute) & USING POST METHOD IN POSTMAN
app.use('/api/users/', userRoute); // THESE LINES WILL CREATE A FOLDER IN MONGODB TO STORE DATA, automatically add 's' always plural tho we set single
app.use('/api/posts/', postRoute); // WORKING IN CLIENT FOLDER, WE WILL USE res = await axios.get('/posts') and then setPosts(res.data);

//----------------------------------------------------------
app.listen('5000', () => {
	console.log('Backend is running on localhost:5000.');
});

const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//REGISTER
router.post('/registerforadminonlynoonecanhavethiscode', async (req, res) => {
	try {
		//USING BCRYPT TO INCREASE SECURITY LEVEL OF PASSWORD
		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(req.body.password, salt);
		//BRING USER SCHEMA (DETAILS OF USER) TO MONGODB API/AUTH/REGISTER METHOD POST
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPass,
		});
		const user = await newUser.save();
		return res.status(200).json(user);
	} catch (err) {
		return res.status(500).json(err);
	}
});

//LOGIN
router.post('/loginforadminonlynoonecanhavethiscode', async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username });

		if (user === null) {
			return res.status(400).json('RETURN NOTHING!');
		} else {
			if (req.body.password === user.password) {
				return res.status(200).json(user);
			} else {
				return res.status(400).json('Wrong credentials!');
			}
		}
	} catch (err) {
		return res.status(500).json(err);
	}
});

module.exports = router; //SEND to index file, it can be set new name(authRouter? or postRouter)

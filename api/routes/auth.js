const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//REGISTER
router.post('/register', async (req, res) => {
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
		res.status(200).json(user);
	} catch (err) {
		// TALK ABOUT ERROR HANDLING LATER
		res.status(500).json(err);
	}
});

//LOGIN
router.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		!user && res.status(400).json('Wrong Username / Password');

		//COMPARE (BCRYPT-PASSCODE VS MONGODB-PASSCODE/BCRYPTED) => VALIDATING
		const validated = await bcrypt.compare(req.body.password, user.password);
		!validated && res.status(400).json('Wrong Username / Password');

		// const { password, ...others } = user; NOT REALLY NECESSARY / ONLY WHEN PASSWORD OR SOME FIELD DISAPPEARED

		console.log(user);
		res.status(200).json(user); // UP TO SERVER WITH STATUS OK 200 WITH USER OBJECT
	} catch (error) {
		res.status(500).json(err);
	}
});

module.exports = router; //SEND to index file, it can be set new name(authRouter? or postRouter)

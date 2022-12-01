const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

//UPDATE USER INFO
router.put('/:id', async (req, res) => {
	if (req.body.userId === req.params.id) {
		if (req.body.password) {
			//GENERATE BCRYPT PASSCODE
			const salt = await bcrypt.genSalt(10);
			//SET PASSWORD AGAIN USING BCRYPT GENERATOR (CUZ REGISTER ALREADY USING BCRYPT AND HAS BCRYPTED PASSCODE )
			req.body.password = await bcrypt.hash(req.body.password, salt);
		}

		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{ $set: req.body },
				{ new: true } //NOT BEING DELAYED WHEN UPDATE USERNAME (2ND ATTEMPT (ONLY OCCURRED WHEN UPDATE USERNAME(NOT PASSWORD))
			);
			res.status(200).json(updatedUser);
		} catch (err) {
			// TALK ABOUT ERROR HANDLING LATER
			res.status(500).json(err);
		}
	} else {
		res.status(401).json('You can update only your account!');
	}
});

//DELETE AND
//UPDATE USER INFO
router.delete('/:id', async (req, res) => {
	if (req.body.userId === req.params.id) {
		//
		const userShouldBeDeleted = await User.findById(req.params.id);
		if (userShouldBeDeleted) {
			if (await User.findById(req.params.id)) {
				//delete posts of user > delete user
				try {
					await Post.deleteMany({});
					await User.findByIdAndDelete(req.params.id);
					res.status(200).json('User has been deleted');
				} catch (err) {
					// TALK ABOUT ERROR HANDLING LATER
					res.status(500).json(err);
				}
			}
		} else {
			res.status(404).json('User not found!');
		}
	} else {
		res
			.status(401)
			.json(
				'You can delete only your account OR it might have not been created!'
			);
	}
});

//GET USER INFO
router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		const { password, ...others } = user._doc; //SOMETIMES CHECKING REQ W POSTMAN, REQ HAS MANY FIELDS, ONLY _DOC HAS GUD SOUP, SOMETIMES NOT
		console.log(user);
		res.status(200).json(others);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router; //SEND to index file, it can be set new name e.g (authRouter? or postRouter)

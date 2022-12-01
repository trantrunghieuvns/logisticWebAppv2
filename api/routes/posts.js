const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

//CREATE NEW POST
router.post('/', async (req, res) => {
	const newPost = new Post(req.body);
	try {
		const savedPost = await newPost.save();
		res.status(200).json(savedPost);
	} catch (error) {
		res.status(500).json(err);
	}
});

//UPDATE POST
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

//DELETE POST

//GET POST
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

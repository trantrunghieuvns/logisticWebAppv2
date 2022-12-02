import './write.css';
import React, { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';

function Write() {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [file, setFile] = useState(null);
	const [notif, setNotif] = useState('');
	const { user } = useContext(Context);

	const handleSubmitPost = async (e) => {
		e.preventDefault();
		const newPost = {
			username: user.username,
			title,
			desc,
		};
		//IMAGE UPLOAD
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append('name', filename);
			data.append('file', file);
			//add img to newPost
			newPost.photo = filename;
			console.log(newPost);
			try {
				await axios.post('/upload', data);
			} catch (error) {}
		}
		//POST UPLOAD
		try {
			const res = await axios.post('/posts', newPost);
			window.location.replace('/post/' + res.data._id);
			setNotif('Post is uploaded successfully!');
		} catch (err) {}
	};

	return (
		<>
			<div className='write'>
				{file && (
					<img
						src={URL.createObjectURL(file)}
						className='writeImg'
						alt='writeImg'
					/>
				)}

				<form className='writeForm' action='' onSubmit={handleSubmitPost}>
					<div className='writeFormGroup'>
						<label className='writeUploadIcon' htmlFor='fileInput'>
							<i className='writeIcon fas fa-plus'></i>
							<span className='writeTextIcon'>Upload Image (png/jpeg)</span>
						</label>

						<input
							type='file'
							id='fileInput'
							style={{ display: 'none' }}
							onChange={(e) => setFile(e.target.files[0])}
						/>

						<div className='writeModalNotif'>
							<h3>{notif}</h3>
						</div>

						<input
							type='text'
							placeholder='Title'
							className='writeInput writeTitleSize'
							autoFocus={true}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className='writeFormGroup'>
						<textarea
							placeholder='tell ur story...'
							type='text'
							onChange={(e) => setDesc(e.target.value)}
							className='writeInput writeText'></textarea>
						<button className='writeSubmit' type='submit'>
							Publish
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Write;

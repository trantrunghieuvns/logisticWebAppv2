import React from 'react';
import './register.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [err, setErr] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErr(false);
		//
		try {
			const res = await axios.post(
				'/auth/registerforadminonlynoonecanhavethiscode',
				{
					username,
					email,
					password,
				}
			);
			res.data &&
				window.location.replace('/loginforadminonlynoonecanhavethiscode'); //set data & navigate
		} catch (err) {
			setErr(true);
		}
	};

	return (
		<div className='register'>
			<span className='registerTitle'>Register</span>
			<form className='registerForm registerBgColor' onSubmit={handleSubmit}>
				<label>Username</label>
				<input
					className='registerInput'
					type='text'
					placeholder='Enter your username...'
					onChange={(e) => setUsername(e.target.value)}
				/>

				<label>Email</label>
				<input
					className='registerInput'
					type='text'
					placeholder='Enter your email...'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Password</label>
				<input
					className='registerInput'
					type='password'
					placeholder='Enter your password...'
					onChange={(e) => setPassword(e.target.value)}
				/>

				{err && (
					<p style={{ paddingTop: '10px', color: '#32f9' }}>
						Something went wrong!
					</p>
				)}

				<button className='registerButton' type='submit'>
					REGISTER
				</button>
				<button className='registerButton'>
					<Link className='link' to='/loginforadminonlynoonecanhavethiscode'>
						LOGIN
					</Link>
				</button>
			</form>
		</div>
	);
}

export default Register;

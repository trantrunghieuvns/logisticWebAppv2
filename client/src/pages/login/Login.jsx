import React, { useContext, useRef } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { Context } from './../../context/Context';
import axios from 'axios';

export default function Login() {
	const userRef = useRef();
	const passwordRef = useRef();
	const { dispatch, isFetching } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: 'LOGIN_START' });
		try {
			const res = await axios.post(
				'/auth/loginforadminonlynoonecanhavethiscode',
				{
					username: userRef.current.value,
					password: passwordRef.current.value,
				}
			);
			return dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
		} catch (err) {
			return dispatch({ type: 'LOGIN_FAILURE' });
		}
	};

	return (
		<div className='login'>
			<span className='loginTitle'>Login</span>
			<form className='loginForm loginBgColor' onSubmit={handleSubmit}>
				<label>Username</label>
				<input
					className='loginInput'
					type='text'
					placeholder='Enter your username...'
					ref={userRef}
				/>
				<label>Password</label>
				<input
					className='loginInput'
					type='password'
					placeholder='Enter your password...'
					ref={passwordRef}
				/>

				<button className='loginButton' type='submit' disabled={isFetching}>
					LOGIN
				</button>
				<button className='loginButton'>
					<Link className='link' to='/registerforadminonlynoonecanhavethiscode'>
						REGISTER
					</Link>
				</button>
			</form>
		</div>
	);
}

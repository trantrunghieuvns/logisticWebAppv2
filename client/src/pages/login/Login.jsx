import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
function Login() {
	return (
		<div className='login'>
			<span className='loginTitle'>Login</span>
			<form className='loginForm loginBgColor'>
				<label>Email</label>
				<input
					className='loginInput'
					type='text'
					placeholder='Enter your email...'
				/>
				<label>Password</label>
				<input
					className='loginInput'
					type='password'
					placeholder='Enter your password...'
				/>

				<button className='loginButton'>
					<Link className='link' to='/login'>
						LOGIN
					</Link>
				</button>
			</form>
			<button className='loginRegisterButton'>
				<Link className='link' to='/register'>
					REGISTER
				</Link>
			</button>
		</div>
	);
}

export default Login;

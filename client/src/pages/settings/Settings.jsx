import './settings.css';

export default function Settings() {
	return (
		<div className='settings'>
			<div className='settingsWrapper'>
				<div className='settingsTitle'>
					<span className='settingsTitleUpdate'>Update Your Account</span>
					<span className='settingsTitleDelete'>Delete Account</span>
				</div>
				<form className='settingsForm'>
					<label>Profile Picture</label>
					<div className='settingsPP'>
						<img
							src='https://corlettexpress.com/wp-content/uploads/2020/03/AdobeStock_246515233-1574x787.jpeg'
							alt=''
						/>
						<label className='writeIconGroup' htmlFor='fileInput'>
							<i className='writeIcon fas fa-plus'></i>
							<span className='writeTextIcon'>Upload Image (png/jpeg)</span>
						</label>
						<input
							id='fileInput'
							type='file'
							style={{ display: 'none' }}
							className='settingsPPInput'
						/>
					</div>
					<label>Username</label>
					<input type='text' placeholder='Safak' name='name' />
					<label>Email</label>
					<input type='email' placeholder='safak@gmail.com' name='email' />
					<label>Password</label>
					<input type='password' placeholder='Password' name='password' />
					<button className='settingsSubmitButton' type='submit'>
						Update
					</button>
				</form>
			</div>
		</div>
	);
}

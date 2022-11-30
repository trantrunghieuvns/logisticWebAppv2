import './write.css';
import React from 'react';

function Write() {
	return (
		<>
			<div className='write'>
				<img
					src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wHfK?ver=1d1c'
					className='writeImg'
					alt='writeImg'
				/>

				<form className='writeForm' action=''>
					<div className='writeFormGroup'>
						<label className='writeUploadIcon' htmlFor='fileInput'>
							<i className='writeIcon fas fa-plus'></i>
							<span className='writeTextIcon'>Upload Image (png/jpeg)</span>
						</label>
						<input type='file' id='fileInput' style={{ display: 'none' }} />

						<input
							type='text'
							placeholder='Title'
							className='writeInput writeTitleSize'
							autoFocus={true}
						/>
					</div>
					<div className='writeFormGroup'>
						<textarea
							placeholder='tell ur story...'
							type='text'
							className='writeInput writeText'></textarea>
						<button className='writeSubmit'>Publish</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Write;

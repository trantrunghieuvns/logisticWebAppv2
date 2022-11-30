import React from 'react';
import './header.css';
const Header = () => {
	return (
		<>
			<div className='header'>
				<div className='headerTitles'>
					<span className='headerTitleLg'>FASDELI LOGISTIC COMPANY</span>
					<span className='headerTitleSm'>
						INTERNATIONAL 100% SAFETY-FIRST DELIVERY SERVICE
					</span>
				</div>
				<div className='headerMask'>
					<img
						className=' headerImg '
						src='https://corlettexpress.com/wp-content/uploads/2020/03/AdobeStock_246515233-1574x787.jpeg'
						alt='fasdeli'
					/>
				</div>
			</div>
		</>
	);
};

export default Header;

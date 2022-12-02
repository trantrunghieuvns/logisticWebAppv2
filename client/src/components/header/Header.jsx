import React from 'react';
import './header.css';
const Header = () => {
	return (
		<>
			<div className='header'>
				<div className='headerWrapper'>
					<div className='headerTitles'>
						<span className='headerTitleLg'>FASDELI LOGISTIC COMPANY </span>
						<span className='headerTitleSm'>
							INTERNATIONAL 100% SAFETY-FIRST DELIVERY SERVICE
						</span>
					</div>
					<div className='headerMask'>
						<img
							className=' headerImg '
							src='https://airasiacargo.vn/wp-content/uploads/2022/11/nhan-luc-nganh-logistics-16431012596021328117946-1024x633.jpg'
							alt='fasdeli'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;

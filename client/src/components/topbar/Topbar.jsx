import './topbar.css';
import { Link } from 'react-router-dom';

function TopBar() {
	const user = true;
	return (
		<div className='top'>
			<div className='topLeft'>
				<i className='topIcon fa-brands fa-twitter'></i>
				<i className='topIcon fa-brands fa-square-instagram'></i>
				<i className='topIcon fa-brands fa-facebook'></i>
				<i className='topIcon fa-solid fa-house-user'></i>
			</div>
			<div className='topCenter'>
				<ul className='topList'>
					<li className='topListItem'>
						<Link className='link' to='/'>
							HOME
						</Link>
					</li>
					{user && (
						<li className='topListItem'>
							<Link className='link' to='/write'>
								WRITE
							</Link>
						</li>
					)}

					<li className='topListItem'>
						{user && (
							<Link className='link' to='/login'>
								LOGOUT
							</Link>
						)}
					</li>
				</ul>
			</div>
			<div className='topRight'>
				<i className='topSearchIcon fa-solid fa-magnifying-glass'></i>

				{user ? (
					<img
						className='topImg'
						src='https://corlettexpress.com/wp-content/uploads/2020/03/AdobeStock_246515233-1574x787.jpeg'
						alt='fasdeli'
					/>
				) : (
					<>
						<ul className='topList'>
							<li className='topListItem'>
								<Link className='link' to='/login'>
									LOGIN
								</Link>
							</li>
							<li className='topListItem'>
								<Link className='link' to='/register'>
									REGISTER
								</Link>
							</li>
						</ul>
					</>
				)}
			</div>
		</div>
	);
}

export default TopBar;

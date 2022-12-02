import './topbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

function TopBar() {
	const admin = 'hieu';
	const { user, dispatch } = useContext(Context);
	const handeLogOut = () => {
		dispatch({ type: 'LOG_OUT' });
	};
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
							<Link
								className='link'
								to='/registerforadminonlynoonecanhavethiscode'
								onClick={handeLogOut}>
								LOGOUT
							</Link>
						)}
					</li>
				</ul>
			</div>
			<div className='topRight'>
				<i className='topSearchIcon fa-solid fa-magnifying-glass'></i>

				{user === admin && (
					<>
						<img
							className='topImg'
							src={
								user.profilePic ||
								'https://tadatruck.vn/wp-content/uploads/2020/11/driver-and-business-man-2.jpg'
							}
							alt='fasdeli'
						/>

						<ul className='topList'>
							<li className='topListItem'>
								<Link
									className='link'
									to='/loginforadminonlynoonecanhavethiscode'>
									LOGIN
								</Link>
							</li>
							<li className='topListItem'>
								<Link
									className='link'
									to='/registerforadminonlynoonecanhavethiscode'>
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

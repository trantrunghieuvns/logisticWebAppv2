import React from 'react';
import './post.css';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
	const PF = 'http://localhost:5000/images/';

	return (
		<>
			<div className='post'>
				{post.photo && <img className='postImg' src={PF + post.photo} alt='' />}

				<div className='postInfo'>
					<Link className='link' to={`/post/${post._id}`}>
						<span className='postTitle'>{post.title}</span>
						<hr />
					</Link>
					<span className='postDate'>
						{new Date(post.createdAt).toDateString()}
					</span>
					<div className='postDesc'>{post.desc}</div>
					<br />
					<Link className='link' to={`/post/${post._id}`}>
						<button className='postInfoBtn'>Read Post</button>
					</Link>
				</div>
			</div>
		</>
	);
}

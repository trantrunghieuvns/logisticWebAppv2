import React from 'react';
import './posts.css';
import Post from '../post/Post';

export default function Posts({ posts }) {
	return (
		<>
			<div className='posts'>
				{posts.map(
					(
						post,
						index //RENDER POST
					) => (
						<Post key={index} post={post} />
					)
				)}
			</div>
		</>
	);
}

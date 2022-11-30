import React from 'react';
import './post.css';

export default function Post() {
	return (
		<>
			<div className='post'>
				<img
					className='postImg'
					src='https://cms.eichertrucksandbuses.com/uploads/truck/sub-category/eebb54d3bcab6acc4341073ed083d87d.png'
					alt='truck'
				/>
				<div className='postInfo'>
					<div className='postCards'>
						<div className='postCard'>Flight Service</div>
					</div>
					<span className='postTitle'>
						Lorem ipsum dolor sit amet consectetur
					</span>
					<hr />
					<span className='postDate'>1 hour ago</span>
					<div className='postDesc'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
						nostrum dolorum eaque dolor unde error architecto excepturi quisquam
						aspernatur iste. Exercitationem nesciunt cum iure. Ducimus sapiente
						quod doloribus harum officia!
					</div>
					<br />
					<button className='postInfoBtn'>Read Post</button>
				</div>
			</div>
		</>
	);
}

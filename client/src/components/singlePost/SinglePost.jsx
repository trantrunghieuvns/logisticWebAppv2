import './singlePost.css';

import React from 'react';

function SinglePost() {
	return (
		<>
			<div className='singlePost'>
				<div className='singlePostWrapper'>
					<img
						src='https://cms.eichertrucksandbuses.com/uploads/truck/sub-category/eebb54d3bcab6acc4341073ed083d87d.png'
						alt='single des'
						className='singlePostImg'
					/>
					<h1 className='singlePostTitle'>
						Lorem ipsum dolor sit amet.
						<div className='singlePostEdit'>
							<i className='singlePostIcon far fa-edit'></i>
							<i className='singlePostIcon far fa-trash-alt'></i>
						</div>
					</h1>
					<div className='singlePostInfo'>
						<span className='singlePostAuthor'>
							Author <b>Name</b>
						</span>
						<span className='singlePostDate'>1 hour ago</span>
					</div>
					<p className='singlePostDesc'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
						nulla libero laudantium ad. Exercitationem voluptas sapiente sunt
						sed non omnis recusandae placeat, ad cupiditate quidem maiores
						fugiat atque quo ipsum? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Expedita nulla libero laudantium ad.
						Exercitationem voluptas sapiente sunt sed non omnis recusandae
						placeat, ad cupiditate quidem maiores fugiat atque quo ipsum? Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Expedita nulla
						libero laudantium ad. Exercitationem voluptas sapiente sunt sed non
						omnis recusandae placeat, ad cupiditate quidem maiores fugiat atque
						quo ipsum?
					</p>
				</div>
			</div>
		</>
	);
}

export default SinglePost;

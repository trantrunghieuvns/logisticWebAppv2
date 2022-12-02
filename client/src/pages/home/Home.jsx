import './home.css';
import { useEffect, useState } from 'react';
import Posts from '../../components/posts/Posts';
import Header from '../../components/header/Header';
import axios from 'axios';

export default function Home() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get('/posts');

			setPosts(res.data);
		};
		fetchPosts();
	}, []);

	return (
		<>
			<Header />
			<div className='home'>
				<Posts posts={posts} />
			</div>
		</>
	);
}

import './home.css';
import Posts from '../../components/posts/Posts';
import Header from '../../components/header/Header';

export default function Home() {
	return (
		<>
			<div className='home'>
				<Header />
				<Posts />
			</div>
		</>
	);
}

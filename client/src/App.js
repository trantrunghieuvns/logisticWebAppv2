import Write from './pages/write/Write';
import TopBar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	const user = true;
	return (
		<BrowserRouter>
			<TopBar />
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<Single />} path='/post/:postId' />
				<Route element={user ? <Write /> : <Login />} path={'/write'} />
				<Route
					element={user ? <Settings /> : <Register />}
					path={'/settings'}
				/>
				<Route element={user ? <Home /> : <Register />} path={'/register'} />
				<Route element={user ? <Home /> : <Login />} path={'/login'} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

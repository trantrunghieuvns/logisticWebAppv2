import Write from './pages/write/Write';
import TopBar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
	const { user } = useContext(Context);
	return (
		<BrowserRouter>
			<TopBar />
			<Routes>
				<Route
					path={'/registerforadminonlynoonecanhavethiscode'}
					element={user ? <Home /> : <Register />}
				/>
				{/* // */}
				<Route
					path={'/loginforadminonlynoonecanhavethiscode'}
					element={user ? <Home /> : <Login />}
				/>
				{/* // */}
				<Route path='/' element={<Home />} />
				{/* // */}
				<Route path='/post/:postId' element={<Single />} />
				{/* // */}
				<Route path={'/write'} element={user ? <Write /> : <Login />} />
				{/* // */}
				<Route
					path={'/settings'}
					element={user ? <Settings /> : <Register />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BlogPost from './components/BlogPost'
import Home from './components/Home'
import Page404 from './components/Page404';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='/post' element={<BlogPost />} />
				<Route path='*' element={<Page404 />} />
			</Routes>

		</Router>
	);
}

let MyRoute = () => {
	return <p>Hello!</p>;
  };

export default App;

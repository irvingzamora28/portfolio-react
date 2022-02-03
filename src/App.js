import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BlogPost from './components/BlogPost'
import BlogPost2 from './components/BlogPost2';
import Blogs from './components/Blogs';
import Home from './components/Home'
import Page404 from './components/Page404';

const App = () => {

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blogs />} />
				<Route path='/post' element={<BlogPost />} />
				<Route path='/post2' element={<BlogPost2 />} />
				<Route path='*' element={<Page404 />} />
			</Routes>

		</Router>
	);
}

export default App;

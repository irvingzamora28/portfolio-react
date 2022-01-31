import Footer from './Footer'

import Body from './Body'
import Contact from './Contact'
import Header from './Header'
import Navigation from './Navigation'
import Projects from './Projects'

const Home = () => {
	return (
		<>
			<Navigation />
			<Header />
			<Body />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default Home;

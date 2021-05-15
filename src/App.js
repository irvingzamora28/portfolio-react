const { default: Body } = require("./components/Body")
const { default: Header } = require("./components/Header")
const { default: Navigation } = require("./components/Navigation")

const App = () => {
	return (
		<>
		<Navigation />
		<Header />
		<Body />
		</>
  	);
}

export default App;

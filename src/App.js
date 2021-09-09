const { default: Body } = require("./components/Body")
const { default: Contact } = require("./components/Contact")
const { default: Header } = require("./components/Header")
const { default: Navigation } = require("./components/Navigation")
const { default: Projects } = require("./components/Projects")

const App = () => {
	return (
		<>
		<Navigation />
		<Header />
		<Body />
		<Projects />
		<Contact />
		</>
  	);
}

export default App;

const { default: Header } = require("./components/Header")
const { default: Navigation } = require("./components/Navigation")

const App = () => {
	return (
		<>
		<Navigation />
		<Header />
		</>
  	);
}

export default App;

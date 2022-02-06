import Footer from './Footer'

import Body from './Body'
import Contact from './Contact'
import Header from './Header'
import Navigation from './NavigationHome'
import Projects from './Projects'
import { useState } from 'react'

const Home = () => {


	/**
	Globals

	Global variables and functions are bad and should be avoided. The reason is, they could make your code unpredictable. Global variables could cause bugs in big projects because they could be modified accidentaly
	from anywhere.
	Testing becomes more difficult, because globals could be very tight coupled to the code.

	One way to solve this problem is 
	 */

	/*
	Magic numbers
	A magic number is a value which meaning is not clear, this is an anti-pattern and should be avoided, as it hides the purpose of the number and could lead to bugs.
	The solution to this problem is to replace all magic numbers with named constants, so that the code would be more readable as well as easier to maintain.

	 */

	// function doAIMove() {
	// 	// Randomly gets a number from 1 to 9 (Board size)
	// 	var randomSquare = document.getElementById("k" + getRandomInt(9));
	// 	while (randomSquare.value != " ") {
	// 		randomSquare = document.getElementById("k" + getRandomInt(9));
	// 	}
	// 	return randomSquare.value;
	// }
	
	// function doAIMove() {
	// 	// Randomly gets a number from 1 to 9 (Board size)
	// 	const BOARD_SIZE = 9;
	// 	var randomSquare = document.getElementById("k" + getRandomInt(BOARD_SIZE));
	// 	while (randomSquare.value != " ") {
	// 		randomSquare = document.getElementById("k" + getRandomInt(BOARD_SIZE));
	// 	}
	// 	return randomSquare.value;
	// }

/********************************************************************************/
/********************************************************************************/


	const [dark, setDark] = useState(() => false)
	const [count, setCount] = useState(() => { console.log("count useState"); return 0 })
	console.log("Render Home");
	const decrement = () => {
		console.log("increment");
		setCount(prevCount => prevCount - 1)
	}

	const increment = () => {
		setCount(prevCount => prevCount + 1)
	}

	const setTheme = () => {
		console.log("Theme: " + dark);
		setDark(!dark)
	}

	const theme = {
		dark: "bg-gray-800 p-2 w-max mx-auto text-white",
		light: "bg-gray-300 p-2 w-max mx-auto text-blue-600"
	}

	return (
		<>
			<Navigation />
			<Header />
			<div className={dark ? theme.dark : theme.light}>
				<button onClick={decrement} className="m-12 py-2 px-12 rounded bg-blue-400 text-white text-4xl">-</button>
				<span className="text-3xl">{count}</span>
				<button onClick={increment} className="m-12 py-2 px-12 rounded bg-blue-400 text-white text-4xl">+</button>

				<div className="flex justify-center">
					<div className="form-check form-switch">
						<input onClick={setTheme} className="" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
							<label className="form-check-label inline-block" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
					</div>
				</div>
			</div>

			<Body />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default Home;

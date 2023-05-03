import { useState } from "react"
import Displayer from "./Displayer"
import Controller from "./Controller"

function Counter() {
	const [count, setCount] = useState(99)
	function increment() {
		console.log("We are executed from a children component")
		setCount(count + 1)
	}
	function decrement() {
		setCount(count - 1)
	}
	return (
		<div>
			<Displayer count={count} />
			<Controller
				name="Romain"
				incrementFunction={increment}
				decrementFunction={decrement}
			/>
		</div>
	)
}

export default Counter

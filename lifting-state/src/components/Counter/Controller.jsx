import React from "react"

function Controller(props) {
	return (
		<div>
			{/* <button
				onClick={() => props.setCount((currentCount) => currentCount - 1)}>
				{" "}
				-{" "}
			</button> */}
			<button onClick={props.decrementFunction}> - </button>
			<button onClick={props.incrementFunction}> + </button>
		</div>
	)
}

export default Controller

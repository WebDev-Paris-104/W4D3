import React from "react"

function Container({ children }) {
	return (
		<div
			style={{
				display: "flex",
				gap: "1rem",
				flexWrap: "wrap",
			}}>
			{children}
		</div>
	)
}

export default Container

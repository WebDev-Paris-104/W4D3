import React from "react"
import "./Card.css"

function Card({ name, artist, year, id, handleDelete }) {
	// const {name, artist, year} =
	// const { song } = props
	return (
		<div className="Card">
			<h2>{name}</h2>
			<p>{artist}</p>
			<p>{year}</p>
			<span onClick={() => handleDelete(id)}>X</span>
		</div>
	)
}

export default Card

import React, { useState, useRef } from "react"

function SongForm({ handleAdd }) {
	const [name, setName] = useState("")
	const yearInput = useRef()
	// const [year, setYear] = useState("")
	const [artist, setArtist] = useState("")

	function handleName(event) {
		console.log(event.target)
		console.log(event.target.value)
		setName(event.target.value)
	}

	function handleArtist(event) {
		setArtist(event.target.value)
	}

	function handleSubmit(event) {
		event.preventDefault()
		const songToAdd = {
			name,
			year: yearInput.current.value,
			artist,
			id: crypto.randomUUID(),
		}
		handleAdd(songToAdd)
		setName("")
		setArtist("")
		yearInput.current.value = ""
	}
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Name: </label>
				<input type="text" id="name" value={name} onChange={handleName} />
			</div>
			<div>
				<label htmlFor="artist">Artist: </label>
				<input type="text" id="artist" value={artist} onChange={handleArtist} />
			</div>
			<div>
				<label htmlFor="year">Year: </label>
				<input ref={yearInput} type="date" id="year" />
			</div>

			<button>Create a song!</button>
		</form>
	)
}

export default SongForm

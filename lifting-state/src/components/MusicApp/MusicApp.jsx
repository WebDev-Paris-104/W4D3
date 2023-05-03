import { useState, useRef } from "react"
import Card from "../Card/Card"
import Container from "../Container/Container"
import SongForm from "../SongForm/SongForm"

const initialState = [
	{
		name: "Someone Like You",
		artist: "Adele",
		year: 2013,
		id: crypto.randomUUID(),
	},
	{
		name: "Someone Like Me",
		artist: "Florian",
		year: 2010,
		id: crypto.randomUUID(),
	},
	{
		name: "Toxic",
		artist: "Britney Spears",
		year: 2010,
		id: crypto.randomUUID(),
	},
]

function MusicApp() {
	const [songs, setSongs] = useState(initialState)
	const [showTheForm, setShowTheForm] = useState(false)
	const [searchedString, setSearchedString] = useState("")

	// const [formData, setFormData] = useState({ name: "", year: "", artist: "" })

	function handleSearch(event) {
		setSearchedString(event.target.value)

		/**
		 * This is bad:
		 * We are loosing information on some songs when filtering.
		 */
		// const filteredSongs = songs.filter((song) => {
		// 	return song.name.toLowerCase().includes(event.target.value.toLowerCase())
		// })

		// setSongs(filteredSongs)
	}

	function handleDelete(id) {
		console.log(id)
		const filteredSongs = songs.filter((song) => {
			console.log(song.id, song.id !== id)
			return song.id !== id
		})

		setSongs(filteredSongs)
	}

	function handleAdd(object) {
		setSongs([...songs, object])
	}
	// function handleSubmit(event) {
	// 	event.preventDefault()
	// 	const year = yearInput.current.value
	// 	// Shortcut way to write an Object:
	// 	const songObject = {
	// 		name,
	// 		year,
	// 		artist,
	// 		id: crypto.randomUUID(),
	// 	}
	// 	// const otherObject = {
	// 	// 	name: name,
	// 	// 	year: year,
	// 	// 	artist: artist,
	// 	// }

	// 	// const copy = [...songs]
	// 	// copy.push(songObject)
	// 	// setSongs(copy)

	// 	setSongs([...songs, songObject])
	// 	setName("")
	// 	yearInput.current.value = ""
	// 	setArtist("")
	// }
	/**
	 * Reccomended way of handling inputs with React:
	 * - The forms should be controlled by React
	 * - We handle the value of every input
	 * - When there is a change made by the user
	 *  => we update the value
	 */

	let songsToDisplay
	if (searchedString === "") {
		songsToDisplay = songs
	} else {
		songsToDisplay = songs.filter((song) =>
			song.name.toLowerCase().includes(searchedString.toLowerCase())
		)
	}

	return (
		<div>
			<button onClick={() => setShowTheForm(!showTheForm)}>
				{showTheForm ? "Hide" : "Show"} the form
			</button>

			{showTheForm && <SongForm handleAdd={handleAdd} />}

			<div>
				<input type="search" value={searchedString} onChange={handleSearch} />
			</div>
			{/* <form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name: </label>
					<input type="text" id="name" value={name} onChange={handleName} />
				</div>
				<div>
					<label htmlFor="artist">Artist: </label>
					<input
						type="text"
						id="artist"
						value={artist}
						onChange={handleArtist}
					/>
				</div>
				<div>
					<label htmlFor="year">Year: </label>
					<input ref={yearInput} type="date" id="year" />
				</div>

				<button>Create a song!</button>
			</form> */}
			<Container>
				{songsToDisplay.map((eachSong) => {
					return (
						<>
							{/* {Card({
                name: eachSong.name,
								artist: eachSong.artist,
								year: eachSong.year,
							})}
							{Card({
                ...eachSong,
							})} */}
							<Card
								key={eachSong.id}
								{...eachSong}
								handleDelete={handleDelete}
							/>
							{/* <Card
								key={eachSong.name}
								name={eachSong.name}
								artist={eachSong.artist}
								year={eachSong.year}
							/> */}
							{/* <Card key={eachSong.name} song={eachSong} /> */}
						</>
					)
				})}
			</Container>
		</div>
	)
}

export default MusicApp

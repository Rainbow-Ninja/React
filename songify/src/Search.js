import React, {Component} from "react";
import "./App.css"

class Search extends Component {
    constructor() {
        super()
        this.state = {
            userInput: "",
            songs: ["crazy frog", "you belong with me", "despacito", "so am I", "barbie girl", "doctor jones", "the way", "fireflies", "500 miles", "coco jumbo", "born to try", "all summer long", "so what", "believe", "big girl", "born to be wild"]
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (event) => {
        event.preventDefault()
    }

    filterSongs = (event) => {
        console.log(event.target.value)
        this.setState({
            userInput: event.target.value
        })

    }


    render() {
        const filteredSongs = this.state.songs.filter(song => 
            song.includes(this.state.userInput)
        )

        return(
            <div className="App">
                <h1>SEARCH SONG</h1>
                <form onSubmit={this.handleClick}>
                    <input type="text" onChange={this.filterSongs}/>
                    <input type="submit" value ="filter" />
                </form>
                {filteredSongs.map(
                    song => <p key={song}>{song}</p>)}
            </div>
        )
    }
}

export default Search;
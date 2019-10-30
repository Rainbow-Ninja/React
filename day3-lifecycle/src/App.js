import React, {Component} from 'react';
// import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    // initialise the state: this is the only place where you should update state directly
    this.state = {
      joke: "Chuck Norris says hello"
    }
    console.log("1. Contructor did execute")
  }

  fetchRandomJokes = async () => {
    let data = await fetch("https://api.chucknorris.io/jokes/random")
    let joke = await data.json()
    this.setState({
      joke: joke.value
    })

  }

  // lifecycle method that gets called after inti render only once, this is the best place to make any network requests or API calls 
  componentDidMount() {
    console.log("3. ComponentDidMount is executed")
    setInterval(this.fetchRandomJokes, 4000)
  }

  componentDidUpdate(prevProps,prevState){
    console.log("4. ComponentDidUpdate executed")
    // this.fetchRandomJokes()
    // this.setState({
    //   joke: "changed joke again"
    // }) //this crashes causing an infinite loop!!
    // if(prevState != this.state){
    //   this.fetchRandomJokes()
    // }

  }

  componentWillUnmount() {
    console.log("5. component will unmount")
    //should stop interval from counting
    clearInterval(this.fetchRandomJokes);
  }

  render() {
    console.log("2. render did Execute")
    // returns elements
    return(
      <p>{this.state.joke}</p>
    )
  }
}

export default App;

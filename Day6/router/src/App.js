import React, {Component} from 'react';
import './App.css';
import HomePage from "./components/HomePage"
import NewEntry from "./components/NewEntry"
import CategorySelection from "./components/CategorySelection"

class App extends Component {
  state={location: "home"}

  // method to render differnet views depending on state value
  getView() {
    const {location} = this.state //destructoring
    switch(location){
      case "home":
        return <HomePage />
      case "category":
        return <CategorySelection />
      case "newEntry":
        return <NewEntry />
      default:
        return <HomePage />
    }
  }

  changeLocation = (location) => {
    this.setState({location})
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.changeLocation.bind(this, "home")}>Home</button>
        <button onClick={this.changeLocation.bind(this, "category")}>Category</button>
        <button onClick={this.changeLocation.bind(this, "newEntry")}>New Entry</button>
        {this.getView()}
      </div>
    );
  }
}

export default App;

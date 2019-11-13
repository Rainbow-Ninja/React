import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import HomePage from "./components/HomePage"
import NewEntry from "./components/NewEntry"
import CategorySelection from "./components/CategorySelection"

class App extends Component {
  state={
    categories: [
      ["food",[]],
      ["thoughts", []],
      ["other", []]
    ]
  }
  
  // state={location: "home"}

  // // method to render differnet views depending on state value
  // getView() {
  //   const {location} = this.state //destructoring
  //   switch(location){
  //     case "home":
  //       return <HomePage />
  //     case "category":
  //       return <CategorySelection />
  //     case "newEntry":
  //       return <NewEntry />
  //     default:
  //       return <HomePage />
  //   }
  // }

  // changeLocation = (location) => {
  //   this.setState({location})
  // }

  render() {
    const {categories} = this.state
    return (

      <div className="App">
        {/* <button onClick={this.changeLocation.bind(this, "home")}>Home</button>
        <button onClick={this.changeLocation.bind(this, "category")}>Category</button>
        <button onClick={this.changeLocation.bind(this, "newEntry")}>New Entry</button>
        {this.getView()} */}
        
        {/* react router dom package BrowserRouter allows us to nest diff routes */}
        <BrowserRouter>
          <Link to="/"><button>Home</button></Link>
          <Link to="/category"><button>Category</button></Link>
          <Link to="/new"><button>New Entry</button></Link>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/category" 
          //render accepts a function that passes props to child component
            render={routeProps => <CategorySelection categories={categories} {...routeProps} />}/>
          <Route exact path="/new/:id"
            render={routeProps => <NewEntry categories={categories} {...routeProps} />} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

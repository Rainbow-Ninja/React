import React, {Component} from "react";
import "../App.css";
import Child from "./Child";

export default class Parent extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "REACT 101"
        }
    }
    changeTitle = (newTitle) => {
        this.setState({
            title: newTitle
        })
    }

    render(){
        return(
            <div className="App">
                <h1>PARENT:</h1>
                <p>{this.state.title}</p>
                <h3>GrandParent's Props: {this.props.name}</h3>
                {/* pass the event as a prop to the child */}
                <Child changeParentTitle={this.changeTitle} title={this.state.title} {...this.props} />
                {/* ...this.props will pass everything from all the props above */}
                <Child changeParentTitle={this.changeTitle} title={this.state.title} {...this.props}/>
            </div>
        )
    }
}
import React, {Component} from "react";
import Parent from "./Parent";
import "../App.css"

export default class Grandparent extends Component {
    constructor(props){
        super(props)
        this.state = ({
            name: "Bob Ross"
        })
    }

    changeGrandParentName = (newGPName) => {
        this.setState({
            name: newGPName
        })
    }

    render() {
        return (
            <div className="App">
                <h2>GrandParent: {this.state.name}</h2>
                <Parent changeGPName={this.changeGrandParentName} name={this.state.name}/>
            </div>
        )
    }
}
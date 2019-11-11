import React, {Component} from "react";

export default class Child extends Component {
    constructor(props){
        super(props)
        this.state={
            userInput: '',
            GPName: ''
        }
    }
    render() {
        return(
            <div>
                <h1>CHILD:</h1>
                <p>{this.props.title}</p>
                {/* <input onChange={this.CaptureUserInput} */}
                <input onChange={(event) => {
                    this.setState({
                        userInput: event.target.value
                    })
                }}/>
                {/* <button onClick={this.props.changeParentTitle.bind(this, "EXPRESS 101")}>Change Parent Title</button> */}
                {/* Can write it this way with arrow function instead of binding if prefer */}
                <button onClick={ () => this.props.changeParentTitle(this.state.userInput)}>Change Sibling Title</button>
                <br></br><br></br>
                <input onChange={(event) => {
                    this.setState({
                        GPName: event.target.value
                    })
                }}/>
                <button onClick={ () => this.props.changeGPName(this.state.GPName)}>Change Grandparent Name</button>
                <p>GrandParent's Name: {this.props.name}</p>
            </div>
        )
    }
}
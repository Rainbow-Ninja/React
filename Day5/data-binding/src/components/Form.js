import React, {Component} from "react"

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            userName: ''
        }
    }

    render(){
        return(
            <div className="App">
                <input onChange={(event) => this.setState({userName: event.target.value})} />
                {/* call the event handler defined in the parents component and pass the user name as an arg */}
                <button onClick={() => this.props.addEvent(this.state.userName)}>Add User</button>             
            </div>
        )
    }
}
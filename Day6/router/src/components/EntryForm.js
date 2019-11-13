import React, {Component} from "react";

export default class EntryForm extends Component {
    constructor(props){
        super(props)
        this.state={
            formContent: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const newContent = (event.target.value);
        this.setState({
            formContent: newContent
        });
    }

    handleSubmit(event) {
        console.log("-------------------FORM SUBMITTED----------------------")
        this.props.category[1].push(this.state.formContent);
        this.setState({
            formContent: ""
        });
        event.preventDefault();
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="formContent" placeholder="New Entry" value={this.state.formContent} onChange={this.handleChange} />
                    <button><submit type="submit" value="Submit">Submit</submit></button>
                </form>
                <p>{this.props.category[1].map((category) => <li key={category}>{category}</li>)}</p>
            </div>
        )
    }

}
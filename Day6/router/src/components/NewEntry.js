import React, {Component} from "react";
// import {useParams} from "react-router-dom";
import EntryForm from "./EntryForm";

export default class NewEntry extends Component {
    constructor(props){
        super(props)

        this.state = {
            errorMessage: "",
            category: ""
        }
    }

    componentDidMount(){ //better to have a lot of code in didmount rather than constructor, cause that slows it down
        let {id} = this.props.match.params;
        let category = this.props.categories[id];
        if(!category){
            return this.setState({errorMessage: "Invalid Category"})
        } else {
            return this.setState({category})
        }
    }

    render(){
        const {errorMessage, category} = this.state
        return(
            <div>
                {errorMessage}
                {/* this says if there is a category show the next line */}
                {category &&
                    <h1>Make a New Entry to {category[0]} Category</h1>
                }
                {category &&
                    <EntryForm category={category} {...this.props} />
                }
            </div>
        )
    }
}
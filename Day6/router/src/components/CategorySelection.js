import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class CategorySelection extends Component {

    render(){
        let {categories} = this.props
        return(
            <div>
                <h1>Choose a Category</h1>
                {categories.map((category, index) => <Link to={`/new/${index}`} key={category}><li>{category[0]}</li></Link>)}
            </div>
        )
    }
}
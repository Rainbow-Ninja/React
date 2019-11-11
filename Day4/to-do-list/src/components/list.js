import React, {Component} from "react";
import "./../App"
import Display from "./Display";

export default class List extends Component{
    constructor(props){
        super(props)
        this.state = ({
            newListItem: '',
            totalList: []
        })
    }

    addToList = () => {
        this.setState(state => {
            const totalList = [state.newListItem, ...state.totalList];
            return {
            totalList,
            newListItem: ''
            }
        })
    }

    render() {
        return (

            <div className="App">
                <h2>My To-Do List</h2>
                <input onChange={event => this.setState({newListItem: event.target.value})} placeholder="What next?"/>
                <button onClick={ () => this.addToList(this.state.newListItem)}>Add Item to List</button>
                <div>
                    <Display items={this.state.totalList} searchInput={this.state.newListItem}/>
                </div>
            </div>
        )
    }
}
import React from "react";
import "./../App"


export default function Display(props){
    const searchItems = props.items.filter(items => items.includes(props.searchInput))
    const listItems = searchItems.map( elements => 
        <ul key={elements}>{elements}</ul>
    );
    return <ul>{listItems}</ul>
}
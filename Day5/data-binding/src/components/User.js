import React from "react"

export default function User(props){
    return(
        <div className="App">
            {/* display names from props passed from parents */}
            {/* props are read only */}
            <h1>I am {props.name}</h1>
            <input value={props.name} onChange={props.editUser} />
            <button onClick={props.deleteEvent}>Delete</button>
        </div>
    )
}
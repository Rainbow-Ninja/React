import React from "react";
import faker from "faker";

const isDirtyWords = (input) => {
    return input.match(/idiot/)
}

const Comment = (props) => {
    if(!isDirtyWords(props.text)){
        return (
            <div className="comment">
                <div className="profile">
                    <img src={faker.image.avatar()}/>
                </div>
                <div>
                    <p className="author">{props.author}</p>
                    <p className="date">{props.date}</p>
                    <p className="text">{props.text}</p> 
                    {/* //{!isDirtyWords(props.text)? props.text:"banned comment"}  can put this in the text bit too to just checkthe comment*/}
                </div>
            </div>
        )
    }
    return(
        <p>Banned Comment</p>
    )
}

export default Comment;
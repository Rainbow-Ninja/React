import React from "react";
import Comment from "./Comment";
import Card from "./Card";


const App = () => {
    return(
        <div>
            <Card>
                <Comment
                    author="Alex"
                    date="29/10 9:30am"
                    text="This is awesome"
                />
            </Card>
            <Card>
                <Comment
                    author="Derek"
                    date="28/10 10:30am"
                    text="You are an idiot"
                />
            </Card>
            <Card>
                <Comment
                author="Hayden"
                date="25/9 10:00am"
                text="This is cool beans"
                />
            </Card>
        </div>
    )
}

export default App;
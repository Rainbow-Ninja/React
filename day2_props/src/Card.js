import React from "react";

const styles= {
    backgroundColor: "#999",
    textAlign: "center",
    width: "25%",
    height: "25%",
    margin: "10px",
    padding: "10px"
}

const Card = (props) => {
    return(
        <div style={styles}>
            {props.children}
        </div>
    )
}

export default Card;
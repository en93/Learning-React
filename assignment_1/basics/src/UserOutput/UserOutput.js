import React from 'react';

const render = props => { 
    
    const style = {
        border: "2px",
        backgroundColor: "red",
        padding: "5px",
        margin: "5px",
    }

    return (
    <div className="DisplayName" style={style}>
        <p>Your username is: {props.username}</p>
    </div>
)};

export default render;
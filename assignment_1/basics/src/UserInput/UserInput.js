import React from 'react';
import './UserInput.css';

const render = props => {
    return (
        <div className="UserInput">
            <input 
                type='text' 
                value={props.username}
                onChange={props.changed}>
            </input>     
        </div>
    )
}

export default render;
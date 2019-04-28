import React from 'react';

const userInput = props => {

    return (
        <div>
            <input type='text' 
                onChange={props.change}
                value={props.val}>
            </input>
            <p>{props.val.length}</p>
        </div>
    );

};

export default userInput;
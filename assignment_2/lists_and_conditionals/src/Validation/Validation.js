import React from 'react';

const responseSuccess = 'Text long enough';
const responseFailure = 'Text too short';

const validation = props => {

    const message = props.inputLength>=5 ? responseSuccess : responseFailure;

    return (
        <div>
            <p>{message}</p>
        </div>
    )
};

export default validation;
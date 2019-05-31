import React from 'react';
import Aux from '../../../hoc/Auxiliary';
const orderSummary = props => { 
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKeys => {
            return (
                <li key={igKeys}><span style={{testTransfor: 'capitalize'}}>
                    {igKeys}</span>: {props.ingredients[igKeys]}
                </li>
            );
        });        
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A burger with the following:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Aux>
    );
};

export default orderSummary;
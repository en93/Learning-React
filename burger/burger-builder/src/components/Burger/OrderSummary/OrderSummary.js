import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

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
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;
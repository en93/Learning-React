import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            // salad: 1,
            // bacon: 1,
            // cheese: 2,
            // meat: 2,
        },
    }

    render() {
        return (
            <Aux>
                <Burger {...this.state}/>
                <BuildControls/>>
            </Aux>
        );
    }
}

export default BurgerBuilder;  
import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

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
                <div>Build controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;  
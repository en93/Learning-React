import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

import React from 'react';

class BurgerIngredient extends React.Component{

    render(){
        let ingredient = null;
        switch(this.props.type) {
            case('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case('bread-top'):
                ingredient = (<div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>);
                break;
            case('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            case('bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            default:
                break;    
        }

        return ingredient;
    };
}

BurgerIngredient.propTypes = {
    type: PropTypes.string,
};

export default BurgerIngredient;

//As functional component
// import classes from './burgerIngredient.css';
// import PropTypes from 'prop-types';

// import React from 'react';

// const burgerIngredient = props => {
//     let ingredient = null;
//     switch(props.type) {
//         case('bread-bottom'):
//             ingredient = <div className={classes.BreadBottom}></div>;
//             break;
//         case('bread-top'):
//             ingredient = (<div className={classes.BreadTop}>
//                 <div className={classes.Seeds1}></div>
//                 <div className={classes.Seeds2}></div>
//             </div>);
//             break;
//         case('meat'):
//             ingredient = <div className={classes.Meat}></div>;
//             break;
//         case('cheese'):
//             ingredient = <div className={classes.Cheese}></div>;
//             break;
//         case('salad'):
//             ingredient = <div className={classes.Salad}></div>;
//             break;
//         case('bacon'):
//             ingredient = <div className={classes.Bacon}></div>;
//             break;
//         default:
//             break;    
//     }

//     return ingredient;
// };

// burgerIngredient.propTypes = {
//     type: PropTypes.string,
// }

// export default burgerIngredient;
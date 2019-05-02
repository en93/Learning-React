import React, {memo} from 'react';
import classes from './Cockpit.css'

const cockpit = props => {

    // useEffect(() => {
    //     const t = setTimeout(() => {
    //         alert('Done something!');
    //     }, 3000);
    //     return () => {
    //         clearTimeout(t);
    //         alert('Cleaning up!');
    //     }
    // }, []);

    let btnClass = props.showPersons ? classes.red : ''; 
    const assignedClasses = [];    
    if (props.length <= 2){
      assignedClasses.push(classes.red);
    } 
    if (props.length <= 1){
      assignedClasses.push(classes.bold);
    } 
    console.log('Cockpit ran render');
    return (
        <div className={classes.Cockpit}>
          <h1>{props.title}</h1>   
          <p className={assignedClasses.join(' ')}>This is working</p>
          <button 
            className={btnClass}
            onClick={ props.click }>Toggle Persons</button>
        </div>
      );
}

export default memo(cockpit);
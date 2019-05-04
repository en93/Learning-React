import React, {useEffect, memo, useRef} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = props => {
    const toggleBtnRef = useRef(null);

    useEffect( () => {
        toggleBtnRef.current.click();
    }, [] );

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
            onClick={ props.click }
            ref={toggleBtnRef}>
                Toggle Persons
            </button>
            <AuthContext.Consumer>
                {context => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>
        </div>
      );
}

export default memo(cockpit);
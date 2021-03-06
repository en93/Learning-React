import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../componenets/Persons/Persons';
import Cockpit from '../componenets/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary'
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props){
    super(props);
    console.log('constructor'); 
  } 

  state = {
    persons : [
      {id: 'daskfjdskaf', name: "Max", age: 28},
      {id: 'daskfjdssgdrgkaf', name: "Manu", age: 29}, 
      {id: 'fgdgdrgr', name: "Stephanie", age: 26}
    ],
    otherState: "Hello there",
    showPersons: false,
    showCockpit: true,
    changedCounter: 0,
    authenticated: false,
  }

  static getDerivedStateFromProps(props, state){
    return state;
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  nameChangedHandler = (event, id) => {    
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex( p => p.id === id ); 
    const person = {
      ...persons[personIndex],
      name: event.target.value
    };
    persons[personIndex] = person;
    this.setState( (prevState, props) => {
      return {persons: persons, changedCounter: prevState.changedCounter + 1}
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;  
    this.setState({showPersons: !doesShow});
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    let persons = this.state.showPersons ?
      (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}/>
      ) : null; 
    
    let cockpit =  this.state.showCockpit ? (
      <Cockpit
        title={this.props.appTitle}
        click={this.togglePersonsHandler}
        length={this.state.persons.length}
        showPersons={this.state.showPersons}
        login={this.loginHandler}/> )
        : null;

    return (
      <Aux>
        <button
        onClick={() => {
          this.setState({ showCockpit: false });
        }}>Remove Cockpit</button>
        <AuthContext.Provider 
            value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
          {cockpit}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    
  }
}

export default withClass(App, classes.App);
import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../componenets/Persons/Persons';
import Cockpit from '../componenets/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons : [
      {id: 'daskfjdskaf', name: "Max", age: 28},
      {id: 'daskfjdssgdrgkaf', name: "Manu", age: 29}, 
      {id: 'fgdgdrgr', name: "Stephanie", age: 26}
    ],
    otherState: "Hello there",
    showPersons: false,
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
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;  
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = this.state.showPersons ?
      (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
      ) : null;    

    return (
      <div className={classes.App}>
        <Cockpit
          click={this.togglePersonsHandler}
          length={this.state.persons.length}
          showPersons={this.state.showPersons}/>
        {persons}
      </div>
    );
    
  }
}


export default App;
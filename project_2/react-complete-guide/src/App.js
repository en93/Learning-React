import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: "inherit",
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let assignedClasses = [];
    let personsLength = this.state.persons.length;
    if (personsLength <= 2){
      assignedClasses.push(classes.red);
    } 
    if (personsLength <= 1){
      assignedClasses.push(classes.bold);
    }
      

    let persons = this.state.showPersons ? (
      <div>
        {this.state.persons.map(
          (person, index) => {
            return <Person 
              key={person.id}
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}/> 
        })}
      </div>
    ) : null;  

    if (persons) {
      style.backgroundColor = "red";
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a react app</h1>   
        <p className={assignedClasses.join(' ')}>This is working</p>
        <button 
          // className={classes}
          style={style} 
          onClick={ this.togglePersonsHandler }>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
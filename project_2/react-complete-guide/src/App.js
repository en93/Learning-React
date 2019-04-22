import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      {name: "Max", age: 28},
      {name: "Manu", age: 29}, 
      {name: "Stephanie", age: 26}
    ],
    otherState: "Hello there",
  };

  switchNameHandler = () => {
    // console.log("was clicked");
    // this.state.persons[0].name = "Ian";
    this.setState({    
      persons : [
        {name: "Ian", age: 28},
        {name: "Manu", age: 29}, 
        {name: "Stephanie", age: 27}
    ]});
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>   
        <p>This is working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>        
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
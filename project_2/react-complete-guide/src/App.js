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

  switchNameHandler = newName => {
    this.setState({    
      persons : [
        {name: newName, age: 28},
        {name: "Manu", age: 29}, 
        {name: "Stephanie", age: 27}
    ]});
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>   
        <p>This is working</p>
        <button onClick={ () => this.switchNameHandler.bind(this, "Ian")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>        
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Ryan")}>Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;

// Using hooks 
// const app = props => {
//   const [ personsState, setPersonsState] = useState(
//     {persons: [
//       {name: "Max", age: 28},
//       {name: "Manu", age: 29}, 
//       {name: "Stephanie", age: 26}
//     ], 
//     otherState: 'some other value'
//   });

//   const switchNameHandler = () => {
//     setPersonsState({    
//       persons : [
//         {name: "Ian", age: 28},
//         {name: "Manu", age: 29}, 
//         {name: "Stephanie", age: 27}
//     ]});
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a react app</h1>   
//       <p>This is working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>        
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//     </div>
//   );
// export default app;
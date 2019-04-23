import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: "Overwatch93",
  };

  updateUsername = event => {
    this.setState({
      username: event.target.value,
    });
  }

  render() { return (
    <div className="App">
      <h1>Displaying username</h1>
      <UserInput 
        username={this.state.username} 
        changed={this.updateUsername}/>
      <UserOutput 
        username={this.state.username}/>
    </div>
  )};
}

export default App;

import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  
  state = {
    input: '',
  }

  updatedInputField = event => this.setState({input: event.target.value});
  
  removeChar = (index) => {
    let chars = [...this.state.input];
    chars.splice(index, 1);
    this.setState({input: chars.join('')});
  }

  render() {
    const CharComponents = 
      (<div>
        {[...this.state.input].map( (c, index) => {
          return (<CharComponent 
            key={index} 
            char={c} 
            click={() => this.removeChar(index)}></CharComponent>)})
        }
      </div>);

    return (
      <div className="App">
        <UserInput 
          change={this.updatedInputField}
          val={this.state.input}  
        />
        <Validation inputLength={this.state.input.length}/>
        {CharComponents}
      </div>
  )};
}

export default App;

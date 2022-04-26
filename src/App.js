import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state={
      email:''
    }
  }
  handleoncange=(e)=>
  {
    this.setState({
      email:e.target.value
    })
  }
  render(){
 return (
    <div className="App">
      <input
       value={this.state.email} 
       onChange={this.handleoncange}/>
      <p>{this.state.email}</p>
     
    </div>
  );
  }

 
}

export default App;

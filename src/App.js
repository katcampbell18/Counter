import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    count:0
  };
  }
  increment(){
    this.setState({
      count: this.state.count + 1
    });
  };
  decrement(){
    this.setState({
      count: this.state.count - 1
    });
  };
  reset(){
    this.setState({
      count:0
    });
  };
  render(){
    return(
    <div>
      <div className="box">
        <h1>Current Count: {this.state.count}</h1>
        <button className='inc' onClick={(e) => this.increment(e)}>Increment</button>
        <button className='dec' onClick={(e) => this.decrement(e)}>Decrement</button>
        <button className='reset' onClick={(e) => this.reset(e)}>Reset</button>
        </div>
    </div>
    );
  }
};

export default App;

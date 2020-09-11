import React from 'react';
//import Counter from './Counter';

class App extends React.Component{
  constructor(props){
    super(props)
      this.state = {count:50}
    
  }
  increment = () => {
    this.setState({count : this.state.count + 1})
  }
  decrement = () => {
    this.setState({count : this.state.count - 1})
  }
  reset = () => {
    this.setState({count:0})
  }
  render(){
    return(
      <div align='center'>
        <br/>
        <br/>
        <h1>{this.state.count}</h1>
        <br/>
        <button className='btn btn-success' onClick = {this.increment}>Increment</button>&nbsp;&nbsp;
        <button className='btn btn-danger'onClick = {this.decrement}>Decrement</button>
        <br/>
        <br/>
        <button className='btn btn-warning' onClick = {this.reset}>Reset</button>
        
      </div>
    )
  }
}
export default App;

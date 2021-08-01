
import React, {Component} from 'react';
import './App.css';
import Clock from './Components/Clock/Clock';

class App extends Component {
  render() {
  return (
    <div className="App">
     <div className="Clock">
    <Clock/>
     </div>
    </div>
  );
  }
}

export default App;

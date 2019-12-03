import React from 'react';
import Cards from './components/Cards';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Hello GitHub Friends</h1>
        <input />
        <button>Find Friends!</button>
        <div className="friends">
          <Cards />
        </div>
      </div>
    );
  }
}

export default App;

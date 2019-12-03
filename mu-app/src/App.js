import React from 'react';
import Cards from './components/Cards';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    myGitHub: []
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/Courtland-Bourgeois")
      .then(res => {
        console.log(res.data)
        this.setState({
          myGitHub: res.data
        })
      })
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <img src="./images/lambdalogo.png" alt="Lambda Logo"/>
          <span role="img">❤️'s</span>
          <img src="./images/githublogo.png" alt="GitHub Logo" />
        </div>
        <input />
        <button>Find Friends!</button>
        <div className="friends">
          <Cards key={this.state.myGitHub.id} card={this.state.myGitHub} />
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Cards from './components/Cards';
import Followers from './components/Followers';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    myGitHub: [],
    myFollowers: []
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/Courtland-Bourgeois")
      .then(res => {
        this.setState({
          myGitHub: res.data
        })
      })
      .catch(err => console.log(err))

    axios
      .get("https://api.github.com/users/Courtland-Bourgeois/followers")
      .then(res => {
        console.log(res)
        this.setState({
          myFollowers: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <p>Hello Friends!</p>
        </div>
        <input />
        <button>Find Friends!</button>
        <div className="friends">
          <Cards key={this.state.myGitHub.id} card={this.state.myGitHub} />
          {this.state.myFollowers.map(card => (
            <Followers key={card.id} card={card} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Cards from './components/Cards';
import Followers from './components/Followers';
import SearchForm from './components/SearchForm'
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    myGitHub: [],
    myFollowers: [],
    mySearch: ""
  }

  handleChange = e => {
    this.setState({
      mySearch: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      myFollowers: this.state.mySearch,
      mySearch: ""
    })
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/Courtland-Bourgeois")
      .then(res => {
        this.setState({
          ...this.state,
          myGitHub: res.data
        })
      })
      .catch(err => console.log(err))

    axios
      .get("https://api.github.com/users/Courtland-Bourgeois/followers")
      .then(res => {
        this.setState({
          ...this.state,
          myFollowers: res.data
        })
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState)
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <p>Hello Friends!</p>
        </div>
        <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} mySearch={this.state.mySearch} />
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

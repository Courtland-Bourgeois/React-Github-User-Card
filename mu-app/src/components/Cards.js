import React from 'react';
import './Cards.css';

const Cards = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.card.avatar_url} alt="Avatar" />
        <div className="card-info">
          <h3 className="name">{props.card.name}</h3>
          <p className="username">{props.card.login}</p>
          <p>Location: {props.card.location}</p>
          <p>Profile: <a href={props.card.html_url} /></p>
          <p>Followers: {props.card.followers}</p>
          <p>Following: {props.card.following}</p>
          <p>Bio: {props.card.bio}</p>
        </div>
      </div>
    </div>
  )
}

export default Cards
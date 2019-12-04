import React from 'react';
import './Cards.css';

const Followers = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.card.avatar_url} alt="Avatar" />
        <div className="card-info">
          <h3 className="name">{props.card.login}</h3>
        </div>
      </div>
    </div>
  )
}

export default Followers
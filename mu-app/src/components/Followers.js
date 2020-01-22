import React from 'react';
import './Cards.css';

const Followers = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.card.avatar_url} alt="Avatar" />
        <div className="card-info">
          <h3 className="name">{props.card.login}</h3>
          <p>{`Profile: `}
            <a href={props.card.html_url}>{props.card.html_url}</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Followers
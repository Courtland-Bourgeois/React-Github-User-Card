import React from 'react'

const SearchForm = props => {
  
  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <input 
          value={props.mySearch}
          name="name"
          onChange={props.handleChange}
          placeholder="Search Username"
        />
        <button>Find Friends!</button>
      </form>
    </div>
  )
}

export default SearchForm
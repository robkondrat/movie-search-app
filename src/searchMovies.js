import React from "react";

export default function SearchMovies() {
  return (
    <form className="form">
      <label htmlFor="query" className="label">Movie Name</label>
      <input className="input" type="text" name="query" placeholder="Jurassic Park" />
      <button className="button" type="button">Search</button>
    </form>
  )
}
import React from "react";
import { directors } from "../data";

function Directors() {
  return ( 
  <div>
    <h1>Directors Page</h1>
    {directors.map((director,index)=>{
      return(
      <div key={index}>{director.name} 
        {director.movies.map((movie, index)=>{
          return (
          <li key={index}>{movie}</li>
          )
        })}
      </div>
      )
    })}
    </div>
    )
}

export default Directors;
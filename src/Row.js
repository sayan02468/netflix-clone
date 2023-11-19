import React, { useState, useEffect} from "react";
import axios from "./axios";
import "./Row.css";


function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    // if it runs we will request tmdv for fetching
    // if [], run once when the row loads, don't run it again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // implementation of async function: https://api.themoviedb.org/3 + /trending/all/week?api_key=${API_KEY}&language=en-US

      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]); //as fetchUrl is from outside the block hence we have to declare it here

  

  
  

  console.log(movies); // table form output in browser console

  return (
    <div className="row">
      <h2> {title} </h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            
            //keep rendering the tiles when required without changing other things used for optimization/
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`https://image.tmdb.org/t/p/original/${isLargeRow? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Row;
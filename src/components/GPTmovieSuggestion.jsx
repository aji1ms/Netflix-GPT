import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";

const GPTmovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-70'>
      <div>
        {movieNames.map((movie, index) =>
          <MovieList key={movie.movieNames} title={movieNames[index]} movies={movieResults[index]} />
        )}
      </div>
    </div>
  )
}
export default GPTmovieSuggestion;

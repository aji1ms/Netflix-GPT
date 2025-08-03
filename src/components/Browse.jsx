import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from '../components/MainContainer';
import SecondaryContainer from '../components/SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcoming";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse

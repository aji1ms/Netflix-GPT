import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from '../components/MainContainer';
import SecondaryContainer from '../components/SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcoming";
import GPTsearchPage from './GPTsearchPage';
import { useSelector } from 'react-redux';
import Footer from './Footer';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTsearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
          <Footer />
        </>
      )}
    </div>
  )
}

export default Browse

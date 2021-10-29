import { useState, useEffect, useRef } from 'react';
import API from '../../core/configs/API';
import { isPersistedInState, persistState } from '../helpers/helpers';

const initialState = {
  page: 1,
  total_results: 0,
  total_pages: 0,
  results: [],
};

//
export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  console.log(searchTerm);
  const fetchMovies = async (page, searchterm = '') => {
    try {
      setLoading(true);
      setError(false);
      const newMovies = await API.fetchMovies(page, searchterm);
      setMovies((prevMovies) => ({
        ...prevMovies,
        total_pages: newMovies.total_pages,
        total_results: newMovies.total_results,
        page: newMovies.page,
        results:
          page > 1
            ? [...prevMovies.results, ...newMovies.results]
            : newMovies.results,
      }));
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };
  // Initial render and search
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedInState(sessionStorage, 'movies');
      if (sessionState) {
        console.log('Fetching from state');
        setMovies(sessionState);
      } else {
        setMovies(initialState);
        console.log('Fetching from API');
        fetchMovies(1, searchTerm);
      }
    }
  }, [searchTerm]);
  // Write to session storage
  useEffect(() => {
    if (!searchTerm) {
      persistState(sessionStorage, 'movies', movies);
    }
  }, [searchTerm, movies]);

  // Load More
  useEffect(() => {
    if (isLoadingMore) {
      fetchMovies(movies.page + 1, searchTerm);
      setIsLoadingMore(false);
    }
    return;
  }, [isLoadingMore, searchTerm, movies.page]);

  return {
    movies,
    loading,
    error,
    setSearchTerm,
    searchTerm,
    setIsLoadingMore,
  };
};

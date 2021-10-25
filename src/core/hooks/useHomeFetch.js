import { useState, useEffect, useRef } from 'react';
import API from '../../core/configs/API';

const initialState = {
  page: 1,
  total_results: 0,
  total_pages: 0,
  results: [],
};

//
export const useHomeFetch = () => {
  const [movies, setMovies] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchMovies = async (page, searchterm = '') => {
    try {
      setLoading(true);
      setError(false);
      const newMovies = await API.fetchMovies(page, searchterm);
      setMovies((prevMovies) => ({
        ...prevMovies,
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
  useEffect(() => {
    fetchMovies(1);
  }, []);

  return { movies, loading, error };
};

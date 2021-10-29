import { useState, useEffect, useCallback } from 'react';
import { isPersistedInState, persistState } from '../helpers/helpers';
import API from '../configs/API';

export const useMovieFetch = (movieId) => {
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);
      // Get Directors
      const directors = credits.crew.filter(
        (member) => member.job === 'Director'
      );
      const data = { ...movie, actors: credits.cast, directors };
      setDetails({ data });
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, [movieId]);
  useEffect(() => {
    const storedMovie = isPersistedInState(sessionStorage, movieId);
    if (storedMovie) {
      console.log('Fetching from state');
      setDetails(storedMovie);
      setLoading(false);
      return;
    }
    console.log('Fetching from API');
    fetchData();
  }, [movieId, fetchData]);

  useEffect(() => {
    if (details) {
      persistState(sessionStorage, movieId, details);
    }
  }, [details, movieId]);

  return { details, loading, error };
};

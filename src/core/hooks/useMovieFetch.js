import { useState, useEffect, useCallback } from 'react';

import API from '../configs/API';

export const useMovieFetch = (movieId) => {
  const [details, setDetails] = useState({});
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
      setDetails({
        ...movie,
        actors: credits.cast,
        directors,
      });
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, [movieId]);
  useEffect(() => {
    fetchData();
  }, [movieId, fetchData]);
  return { details, loading, error };
};

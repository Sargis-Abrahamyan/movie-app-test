import { useEffect, useState } from 'react';

import { fetchMovies } from '../../../services/fetchMovies.service.ts';
import type { MovieResponse } from '../../../types/movieTypes.ts';

const useMovieFetch = () => {
  const [movies, setMovies] = useState<MovieResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      const data = await fetchMovies();
      setMovies(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { movies, loading, error };
};

export default useMovieFetch;

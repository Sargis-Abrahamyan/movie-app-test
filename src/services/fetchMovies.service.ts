import type {MovieResponse} from "../types/movieTypes.ts";

export const fetchMovies = async (): Promise<MovieResponse> => {
    try {
        const response = await fetch('/data.json');

        if (!response.ok) {
            throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`);
        }

        const data: MovieResponse = await response.json();

        console.log('Fetched movies:', data);

        return data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

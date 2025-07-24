import {useEffect, useMemo, useState} from "react";
import type {AllMoviesType} from "../../types/movieTypes.ts";
import useMovieFetch from "./useMovieFetch.ts";

const useFeaturedMovies = () => {
    const {movies} = useMovieFetch();
    const [activeMovie, setActiveMovie] = useState<AllMoviesType | null>(null);

    const savedId = useMemo(() => sessionStorage.getItem("lastSeenMovieId"), []);

    useEffect(() => {
        if (!movies?.TendingNow?.length) return;

        const movieFromSession = movies.TendingNow.find(item => item.Id === savedId);
        if (movieFromSession) {
            setActiveMovie(movieFromSession);
        } else if (movies.Featured) {
            setActiveMovie(movies.Featured);
        }
    }, [movies?.TendingNow, movies?.Featured, savedId]);


    const sortedTrending = useMemo(() => {
        const trending = movies?.TendingNow ?? [];
        if (!savedId) return trending.slice(0, 50);

        const index = trending.findIndex(movie => movie.Id === savedId);
        if (index === -1) return trending.slice(0, 50);

        const updated = [...trending];
        const [savedMovie] = updated.splice(index, 1);
        return [savedMovie, ...updated].slice(0, 50);
    }, [movies?.TendingNow, savedId]);

    const updateFeatured = (movie: AllMoviesType) => {
        setActiveMovie(movie);
        sessionStorage.setItem("lastSeenMovieId", movie.Id);
    };

    return {
        activeMovie,
        trendingMovies: sortedTrending,
        updateFeatured,
    };
};

export default useFeaturedMovies;

import { useState, useEffect, useCallback, useRef } from 'react';

import type { AllMoviesType } from '../../../types/movieTypes';

const useVideoPlayback = (activeMovie: AllMoviesType | null) => {
    const [playVideo, setPlayVideo] = useState(false);
    const [backgroundVideoUrl, setBackgroundVideoUrl] = useState<string | null>(null);
    const timeoutRef = useRef<number | null>(null);

    const playMovieWithDelay = useCallback((movie: AllMoviesType | null) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setPlayVideo(false);
        setBackgroundVideoUrl(null);
        timeoutRef.current = setTimeout(() => {
            setPlayVideo(true);
            setBackgroundVideoUrl(movie?.VideoUrl ?? null);
        }, 2000);
    }, []);

    const savedId = sessionStorage.getItem("lastSeenMovieId");

    useEffect(() => {
        if (savedId && activeMovie?.Id) {
            playMovieWithDelay(activeMovie);
        }
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [activeMovie?.Id, playMovieWithDelay]);

    return {playVideo, backgroundVideoUrl, playMovieWithDelay};
};

export default useVideoPlayback;

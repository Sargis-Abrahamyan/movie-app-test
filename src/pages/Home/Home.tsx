import React, {useCallback, lazy, Suspense} from "react";

import FeaturedInfo from "./FeaturedInfo";
import TrendingNow from "./TrendingNow";
import useFeaturedMovies from "./useFeaturedMovies";
import useVideoPlayback from "./useVideoPlayback";
import type {AllMoviesType} from "../../types/movieTypes";
import styles from "./Home.module.css";

const HomeVideoBackground = lazy(() => import("./HomeVideoBackground"));

const Home = (): React.JSX.Element | null => {
    const {activeMovie, trendingMovies, updateFeatured} = useFeaturedMovies();
    const {playVideo, backgroundVideoUrl, playMovieWithDelay} = useVideoPlayback(activeMovie);

    const handleTrendingClick = useCallback(
        (movie: AllMoviesType) => {
            updateFeatured(movie);
            playMovieWithDelay(movie);
        },
        [updateFeatured, playMovieWithDelay]
    );

    if (!activeMovie) return null;

    return (
        <div className={styles.home}>
            <Suspense fallback={<div>Loading video...</div>}>
                {playVideo ? (
                    <HomeVideoBackground VideoUrl={backgroundVideoUrl as string}/>
                ) : (
                    <div
                        className={styles.backgroundImage}
                        style={{backgroundImage: `url(${activeMovie.CoverImage})`}}
                    />
                )}
            </Suspense>
            <FeaturedInfo {...activeMovie} />
            <TrendingNow handleTrendingClick={handleTrendingClick} trendingNow={trendingMovies}/>
        </div>
    );
};

export default Home;

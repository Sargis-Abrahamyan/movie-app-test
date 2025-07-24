import type {AllMoviesType} from "../../types/movieTypes.ts";
import  styles from "./HomeVideoBackground.module.css";

const HomeVideoBackground = ({VideoUrl}: Pick<AllMoviesType, 'VideoUrl'>) => {
    if (!VideoUrl) return null;
    return (
        <video
            key={VideoUrl}
            className={styles.home__backgroundVideo}
            autoPlay
            muted
            loop
            playsInline
        >
            <source src={VideoUrl} type="video/mp4"/>
        </video>
    );
};

export default HomeVideoBackground;
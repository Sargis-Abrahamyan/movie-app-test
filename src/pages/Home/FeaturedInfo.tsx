import {formatDuration} from '../../utils/formatDuration.ts';
import PlayOrInfoButton from "../../components/playOrInfoButton/PlayOrInfoButton.tsx";
import type {AllMoviesType} from "../../types/movieTypes.ts";
import styles from './FeaturedInfo.module.css';

type FeaturedInfoProps = Pick<
    AllMoviesType,
    "Category" | "TitleImage" | "ReleaseYear" | "MpaRating" | "Duration" | "Description"
>;
const FeaturedInfo = ({Category, TitleImage, ReleaseYear, MpaRating, Duration, Description}: FeaturedInfoProps) => {
    return (
        <div className={styles.featuredInfo}>
            {Category && <h4 className={styles.featuredInfo__category}>{Category}</h4>}

            {TitleImage && (
                <img
                    src={TitleImage}
                    alt={`Title logo for ${Category || 'featured movie'}`}
                    className={styles.featuredInfo__titleImage}
                />
            )}

            <div className={styles.featuredInfo__releaseInfo}>
                <span className={styles.featuredInfo__separator}>{ReleaseYear}</span>
                <span className={styles.featuredInfo__separator}>{MpaRating}</span>
                <span className={styles.featuredInfo__separator }>{formatDuration(+Duration)}</span>
            </div>

            <p className={styles.featuredInfo__description}>{Description}</p>

            <div className={styles.featuredInfo__actions}>
                <PlayOrInfoButton variant="playButton" text="play"/>
                <PlayOrInfoButton variant="moreInfoButton" text="more info"/>
            </div>
        </div>
    );
};

export default FeaturedInfo;

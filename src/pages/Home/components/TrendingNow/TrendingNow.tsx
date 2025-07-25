import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import type { AllMoviesType } from '../../../../types/movieTypes.ts';
import styles from './TrendingNow.module.css';

interface TrendingNowProps {
  trendingNow: AllMoviesType[];
  handleTrendingClick: (movie: AllMoviesType) => void;
}

const TrendingNow = ({ trendingNow, handleTrendingClick }: TrendingNowProps) => {
  return (
    <div className={styles['home__slider--container']}>
      <h3 className={styles['home__block--title']}>Trending Now</h3>
      <Swiper
        slidesPerView={8}
        spaceBetween={20}
        className={styles.swiper}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 8 },
        }}
      >
        {trendingNow.map((movie) => (
          <SwiperSlide
            key={movie.Id}
            className={styles['home__slider--item']}
            onClick={() => handleTrendingClick(movie)}
          >
            <img
              src={movie.CoverImage}
              alt={movie.Title}
              className={styles['home__slider--item--image']}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(TrendingNow);

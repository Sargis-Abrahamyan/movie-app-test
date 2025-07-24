export interface AllMoviesType {
    Category: string,
    CoverImage: string,
    Date: string,
    Description: string,
    Duration: string,
    Id: string,
    MpaRating: string,
    ReleaseYear: string,
    Title: string,
    TitleImage: string,
    VideoUrl?: string,
}

export type FeaturedMovie = Omit<AllMoviesType, 'VideoUrl'>
export type TendingNowMovie = AllMoviesType

export interface MovieResponse {
    Featured: FeaturedMovie;
    TendingNow: TendingNowMovie[];
}
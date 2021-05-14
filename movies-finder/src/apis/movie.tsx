
export interface ITrailer {
    id?:string;
    link?:string;

}
export interface ICast {
    actor?:string;
    actor_id?:string;
    character?:string
}
export interface ISpecItem{
    item?:string[];
}
export interface ITitleInfor {
    imdbID:string;
    Title?: string;
    Year?: string;
    Rated?: string;
    Released?: number;
    rating_votes?: number;
    Runtime?: string;
    Genre?:string;
    Director?:string;
    Poster?:string;
    Plot?:string;
    imdbRating?:string;
    BoxOffice?:string;
    Production?:string;
    Actors?:string;


}
export interface ITitle{
    imdbID?:string;
    Title?:string;
    Type?:string;
    Year?:string;
    Poster?:string;
}
export interface ISearchResults{
    Search?:ITitle[];
    Response?:boolean;
    totalResults?:number;
    Error?:string
}
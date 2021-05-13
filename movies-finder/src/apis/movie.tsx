
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
export interface IMovie {
    id?: string;
    title?: string;
    year?: string;
    length?: string;
    rating?: number;
    rating_votes?: number;
    poster?: string;
    plot?:string;
    trailer?:ITrailer;
    cast?:ICast[];
    technicalSpecs?:ISpecItem[];

}
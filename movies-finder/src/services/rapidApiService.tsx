import { ISearchResults, ITitleInfor } from "../apis/movie";
import { IMDB_BASE_URL, IMDB_X_RAPIDAPI_HOST, IMDB_X_RAPIDAPI_KEY } from "../constants/imdbData";
import { ResponseStatus } from "../enums/httpResponseStatus";

//prepare header options
function GetHeaderOptions() {
    return {
        'x-rapidapi-key': IMDB_X_RAPIDAPI_KEY,
        'x-rapidapi-host': IMDB_X_RAPIDAPI_HOST,
    }
}
//get movies by id and update loading status during the api call
export function fetchMovie(id: string,updatedStates:Function) {
    updatedStates(true,null);
    const requestOptions = {
        method: 'GET',
        headers: GetHeaderOptions()
    };
    return fetch(`${IMDB_BASE_URL}/?i=${id}&r=json`, requestOptions)
        .then(async response =>{
            if(response.ok){
            const data = await response.json() as ITitleInfor;
            console.log('data',data)
            updatedStates(false,data);
            }else{
                updatedStates(true,ResponseStatus.ServerError);
            }
        }).catch(error=>{
            console.log('error',error);
            updatedStates(true,ResponseStatus.ServerError);
        });
}

//search movies by title and update loading status during the api call
export function searchMovies(name: string,page:number,updatedStates:Function) {
    updatedStates(true,null);
    const requestOptions = {
        method: 'GET',
        headers: GetHeaderOptions()
    };
    return fetch(`${IMDB_BASE_URL}/?s=${name}&page=${page}`, requestOptions)
        .then(async response =>{
            if(response.ok){
              const data = await response.json() as ISearchResults;
              console.log('data',data)
              
              updatedStates(false);
              if(!data?.Response && data?.Error){
                localStorage.setItem('searchedTiles', JSON.stringify([]));
                  alert(data?.Error)
              }else{
                localStorage.setItem('searchedTiles', JSON.stringify(data?.Search));
              }
            }else{
                localStorage.setItem('searchedTiles', JSON.stringify([]));
                updatedStates(false);
            }
        }).catch(error=>{
            console.log('error',error);
            updatedStates(false);
        });
}


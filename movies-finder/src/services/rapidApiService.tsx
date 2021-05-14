import { ISearchResults, ITitleInfor } from "../apis/movie";
import { IMDB_BASE_URL, IMDB_X_RAPIDAPI_HOST, IMDB_X_RAPIDAPI_KEY } from "../constants/imdbData";

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
                updatedStates(true);
            }
        }).catch(error=>{
            console.log('error',error);
            updatedStates(true);
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
              
              
              if(!data?.Response && data?.Error){
                 updatedStates(false);
                 console.log('arive1')
                  alert(data?.Error)
              }else{
                console.log('arive2')
                updatedStates(false,data?.Search);
              }
            }else{
                console.log('arive3')
                updatedStates(false);
                console.log('An Unexpected Error occured');
            }
        }).catch(error=>{
            console.log('An Unexpected Error occured',error);
            updatedStates(false);
        });
}


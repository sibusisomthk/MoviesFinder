//let user = JSON.parse(localStorage.getItem('user'));

import { ITitle } from "../apis/movie";

//get serach results from LocalStorage

//favourite movies from local storage
export function getFavouriteMovies() {

    try {
        const data = localStorage.getItem('favouriteTiles');
        if (data) return JSON.parse(data);
        return [];
    } catch (error) {
        console.log('error', error)
        return [];
    }
}
//add title local favourite tiles
export function saveToFavouriteMovies(title: ITitle) {
    let data = localStorage.getItem('favouriteTiles');
    if (data) {
        let tempData = JSON.parse(data) as ITitle[];
        const exists = tempData.find(item => { return item?.imdbID === title?.imdbID });
        if (exists) {
            console.log('already exists in favourites');
            return;
        }
        tempData = [...tempData, title];
        localStorage.setItem('favouriteTiles', JSON.stringify(tempData));
    } else {
        let tempData = [title];
        localStorage.setItem('favouriteTiles', JSON.stringify(tempData));
    }
}

//save updatedlist to local storage
export function saveFavouriteMovies(titles: ITitle[]){
    localStorage.setItem('favouriteTiles', JSON.stringify(titles));
}
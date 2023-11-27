'use strict';

const api_key = "bcbe34f48652ee7853141ebe85ad25c1";

const imageBaseURL = "https://image.tmdb.org/t/p/";


// FETCH DATA


const fetchDataFromServer = function (url, callback, optionalParam) {
    fetch(url).then( response => response.json()).then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer};


const BASE_URL =  "https://api.tvmaze.com"

const Api = async (queryString) =>{

   
//    throw new Error('something');


    const response = await fetch(`${BASE_URL}${queryString}`);
    const body = await response.json();

    return body;

}

export const searchForShows = (query)=> Api(`/search/shows?q=${query}`)
export const searchForPeople = (query)=> Api(`/search/people?q=${query}`)

export const getShowById = (showId) => Api(`/shows/${showId}`);

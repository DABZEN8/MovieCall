//All tmdb API calls live here. Components import from this file

const BASE_URL = "https://api.themoviedb.org/3"
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

//builds a full tmdb url with the api-key query added
function buildUrl(path, params = {}) {

    const url = new URL(BASE_URL + path)
    url.searchParams.set("api_key", API_KEY)
    url.searchParams.set("language", "en-US")

    for (const key in params) {
        url.searchParams.set(key, params[key])
    }
    return url.toString()
}

//throws if tmdb returns an error status
async function tmdbFetch(path, params) {
    const response = await fetch(buildUrl(path, params))
    if (!response.ok) {
        throw new Error("Tmdb request failed: " + response.status)
    }
    return response.json()
}

//search movies by title. returns a list of movie objects
export async function searchMovies(query) {
    const data = await tmdbFetch("/search/movie", { query })
    return data.results
}

//get full poster url froma tmdb poster_path
//returns null if movie has no poster
export function getPosterUrl(posterPath) {
    if (!posterPath) return null
    return IMAGE_BASE_URL + posterPath
}
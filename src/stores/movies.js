import { defineStore } from "pinia"

export const useMoviesStore =

//Store 'movies' innehåller användarens sparade filmer
defineStore("movies", {

    state: () => {

        // Hämtar filmer som sparades tidigare från localStorage
        const savedMovies =
        localStorage.getItem("savedMovies")

        if (savedMovies) {

            return {
                savedMovies:
                JSON.parse(savedMovies)
            }
        }

        // tom lista startas om film inte finns
        return {
            savedMovies: []
        }
    },
    actions: {
        //film läggs till om inte den finns och uppdaterar sen local storage
        addMovie(movie) {
            const exist =
            this.savedMovies.find(

                m => m.id === movie.id
            )

            if (!exist) {
                this.savedMovies.push(movie)

                localStorage.setItem(
                    "savedMovies",
                    JSON.stringify(
                        this.savedMovies
                    )
                )
            }
        },
        // ta bort filmen frn listan och uppdaterar också localstorage
        removeMovie(id) {
            this.savedMovies =
            this.savedMovies.filter(
                movie => movie.id !== id
            )
            localStorage.setItem(
                "savedMovies",
                JSON.stringify(
                    this.savedMovies
                )
            )
        }
    }
})
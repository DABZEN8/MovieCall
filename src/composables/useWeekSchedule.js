import { ref } from "vue"
import { useLocalStorage } from "./useLocalStorage"

const {
    save,
    load
}
=
useLocalStorage()

// handles the film schedule of the week
export function useWeekSchedule() {

    const days =
    [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]

    const savedWeekSchedule =
    load("weekSchedule")

    const weekSchedule =
    ref(
        savedWeekSchedule ||

        days.map(day => ({
            day,
            movie: null
        }))
    )

    const errorMessage =
    ref("")

    //generates 7 random movies from the list and adds them to the week days
    function generateWeekSchedule(movies) {

        errorMessage.value = ""

        if (movies.length <7) {
            errorMessage.value =
            "You need at least 7 movies in your list."

            return
        }

        const shuffledMovies =
        [...movies].sort(
            () => Math.random() - 0.5
        )

        const selectedMovies =
        shuffledMovies.slice(0, 7)

        weekSchedule.value =
        days.map((day, index) => ({
            day,
            movie: selectedMovies[index]
        }))

        save(
            "weekSchedule",
            weekSchedule.value
        )
    }

    return {
        weekSchedule,
        generateWeekSchedule,
        errorMessage
    }
}
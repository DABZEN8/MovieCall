import { ref } from "vue"
import { searchMovies } from "@/services/tmdb"

export function useMovieSearch() {
    const results = ref([])
    const isLoading = ref(false)
    const errorMessage = ref(null)

    async function search(query) {
        if (!query) return
        
        isLoading.value = true
        errorMessage.value = null

        try {
            results.value = await searchMovies(query)
        } catch (err) {
            errorMessage.value = err.message
            results.value = []
        }   finally {
            isLoading.value = false
        }

    }

    return { results, isLoading, errorMessage, search }
}
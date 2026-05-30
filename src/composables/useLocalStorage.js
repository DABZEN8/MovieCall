// Denna filen är för att hantera all logik som har med loca storage 
// Vad vi sparar
// Filmer i 'min lista'
// Veckoplan av filmer från användarens sparade lista.

export function useLocalStorage() {

    //spara data under nyckel som valta
    function save(key, data) {
        localStorage.setItem(
            key, 
            JSON.stringify(data)
        )
    }

    //...Hämtar data 
    function load(key) {

        const data =
        localStorage.getItem(key)

        if (data) {
            return JSON.parse(data)
        }

        return null
    }
    return {
        save,
        load
    }
}
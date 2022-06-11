
const API_URL = "https://rickandmortyapi.com/api";

export const getAllCharacters = async () => {

    try {
        const response = await fetch(API_URL + "/character");
        const jsonData = await response.json();

        const results = jsonData.results;

        if (!results) {
            return console.log("No results")
        }

        return results.map((element)=>{
            return {
                name: element.name,
                image: element.image
            }
        })

        /*const dataCharacters = [];

        for (let i = 0; i < result.length; i++) {

            character = results[i];

            dataCharacters.push({
                name: character.name,
                image: character.image
            })
        }

        return dataCharacters;*/

    } catch (error) {
        console.log(error);
        return []
    }

    
}
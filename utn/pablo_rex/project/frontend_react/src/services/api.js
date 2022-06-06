const API_URL = "https://rickandmortyapi.com/api"

export const getAllCharacters = async () => {

  try {

    const response = await fetch(API_URL + "/character");
    const jsonData = await response.json();

    const results = jsonData.results;

    if (!results)
      return [];

    return results.map((element) => {
      return {
        name: element.name,
        image: element.image
      }
    })


  } catch (error) {

    console.log(error);
    return [];
  }
}
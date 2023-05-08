export const getPokemons = async (): Promise<any> => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon")
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const getPokemon = async ({ name }: { name: string }): Promise<any> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return response.json()
  } catch (error) {
    console.log(error)
  }
}
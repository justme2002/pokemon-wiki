import { IPokemon } from "./IPokemon"

export interface IPokemonApiResult {
  count: number
  next: string
  previous: null
  results: IPokemon[]
}
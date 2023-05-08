import React from 'react'
import './style.css'
import Link from 'next/link'
import { getPokemon, getPokemons } from '@/services/pokemon'
import { IPokemonApiResult } from '@/interfaces/IPokemonApiResult'
import Image from 'next/image'

const PokePage = async () => {

  const pokemons: IPokemonApiResult = await getPokemons() as IPokemonApiResult
  return (
    <div>
      <div className='py-5 grid grid-cols-1 md:grid-cols-4 gap-2 px-4'>
        {pokemons.results.map(async (pokemon) => {
          const poke = await getPokemon({ name: pokemon.name })
          return (
            <div className='p-5 bg-slate-600 rounded-[10px] text-center h-[400px] flex flex-col justify-center items-center'>
              <Image 
                src={poke.sprites.other.dream_world.front_default}
                alt={poke.sprites.other.dream_world.front_default}
                width={100}
                height={100}
              />
              <div className='mt-3'>
                <Link 
                  href={`/poke/${pokemon.name}`}>
                  <p>{pokemon.name}</p>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PokePage
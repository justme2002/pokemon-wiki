import { IAbilities, IAbility } from '@/interfaces/IAbility'
import { ISprite } from '@/interfaces/ISprites'
import { getPokemon } from '@/services/pokemon'
import Image from 'next/image'
import React from 'react'

const Page = async ({ params }: { params: { name: string }}) => {
  const pokemon = await getPokemon({ name: params.name })
  const abilities: IAbilities[] = pokemon.abilities as IAbilities[]
  const sprite = pokemon.sprites
  return (
    <div className='flex justify-center items-center h-[70vh] px-2 md:px-3'>
      <div className='ease-in flex justify-around p-4 rounded-[20px] bg-slate-700 w-[500px] hover:shadow-slate-900 hover:shadow-xl hover:scale-110 transition-all'>
        <div>
          <Image 
            src={sprite.other.dream_world.front_default}
            alt={sprite.other.dream_world.front_default}
            width={150}
            height={150}
          />
        </div>
        <div>
          <h3 className='heading text-white text-xl'>Name: </h3>
          <p>{params.name}</p>
          <h3 className='mt-2 heading text-white text-xl'>Abilities: </h3>
          {abilities.map(ability => {
            return (
              <div>
                <p>{ability.ability.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Page
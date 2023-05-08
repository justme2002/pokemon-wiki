export interface IAbility {
  name: string
  url: string
}

export interface IAbilities {
  ability: IAbility,
  is_hidden: boolean,
  slot: number
}
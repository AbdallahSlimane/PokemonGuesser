export interface Pokemon {
  id: number,
  name: string,
  evolutions?: number,
  type1?: string,
  type2?: string,
  attack?: number,
  legendary?: boolean,
  weight?: number,
  height?: number
}

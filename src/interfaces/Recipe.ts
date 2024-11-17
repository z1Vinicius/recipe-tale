export interface IRecipe {
  id: string,
  title: string
  preparationTime: number
  servingSize: number
  calories: number
  description: string
  status: string
  categories: ICategory[]
  images: IImage[]
  instructions: IInstruction[]
  ingredients: IIngredient[]
}

export interface ICategory {
  name: string
  description: string
}

export interface IImage {
  url: string
  description: string
}

export interface IInstruction {
  description: string
}

export interface IIngredient {
  name: string
  unit: string
  count: number
}

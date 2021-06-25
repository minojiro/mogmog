export type UserInfo = {
  id: string
  name: string
  icon: string
}

export type AuthHeader = {
  authorization: string
}

export type Product = {
  id: number
  name: string
  amazonUrl: string
  coverImageUrl: string
  nutritionImageUrl: string
  createdAt: string
}

export type ProductImageType = 'COVER' | 'NUTRITION'

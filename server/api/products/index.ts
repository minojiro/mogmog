import { Product, FormProduct } from '$/types'

export type Methods = {
  get: {
    query?: {
      q?: string
    }
    resBody: Product[]
  }
  post: {
    reqBody: FormProduct
    resBody: Product
  }
}

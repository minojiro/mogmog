import { Product, FormProduct } from '$/types'

export type Methods = {
  get: {
    resBody: Product
  }
  put: {
    reqBody: FormProduct
    resBody: Product
  }
}

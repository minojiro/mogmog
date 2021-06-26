import { defineController } from './$relay'
import { getLatestProducts, createProduct } from '$/service/product'

export default defineController(() => ({
  get: async ({ query }) => {
    const word = query && query.q
    const products = await getLatestProducts(word)
    return { status: 200, body: products }
  },
  post: async ({ body }) => {
    const product = await createProduct({
      name: body.name,
      amazonUrl: body.amazonUrl,
      nutritionImageUrl: body.nutritionImageUrl,
      coverImageUrl: body.coverImageUrl
    })
    return { status: 200, body: product }
  }
}))

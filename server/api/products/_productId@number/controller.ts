import { defineController } from './$relay'
import { getProductById, updateProduct } from '$/service/product'

export default defineController(() => ({
  get: async ({ params }) => {
    const product = await getProductById(params.productId)
    return { status: 200, body: product }
  },
  put: async ({ params, body }) => {
    const product = await updateProduct(params.productId, {
      name: body.name,
      amazonUrl: body.amazonUrl,
      nutritionImageUrl: body.nutritionImageUrl,
      coverImageUrl: body.coverImageUrl
    })
    return { status: 200, body: product }
  }
}))

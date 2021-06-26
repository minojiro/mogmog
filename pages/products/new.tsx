import { useCallback, useState } from 'react'
import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'
import type { Task } from '$prisma/client'
import type { FormEvent, ChangeEvent } from 'react'
import ProductForm from '~/components/ProductForm'
import Header from '~/components/Header'
import { FormProduct } from '$/types'
import { useRouter } from 'next/router'

const ProductNew = () => {
  const router = useRouter()
  const [product, setProduct] = useState<FormProduct>({
    name: '',
    nutritionImageUrl: '//placehold.jp/100x100.png',
    amazonUrl: '',
    coverImageUrl: '//placehold.jp/100x100.png'
  })
  const onSubmit = useCallback(async () => {
    const { body: createdProduct } = await apiClient.products.post({
      body: {
        name: product.name,
        nutritionImageUrl: product.nutritionImageUrl,
        amazonUrl: product.amazonUrl,
        coverImageUrl: product.coverImageUrl
      }
    })
    router.push(`/products/${createdProduct.id}`)
  }, [product])

  return (
    <div className="container">
      <Header />
      <ProductForm
        formProduct={product}
        onChange={setProduct}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default ProductNew

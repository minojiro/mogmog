import { apiClient } from '~/utils/apiClient'
import { FormProduct } from '$/types'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '~/components/Header'
import ProductForm from '~/components/ProductForm'
import useAspidaSWR from '@aspida/swr'

const ProductEdit = () => {
  const [formProduct, setFormProduct] = useState<FormProduct>({
    name: '',
    nutritionImageUrl: '//placehold.jp/100x100.png',
    amazonUrl: '',
    coverImageUrl: '//placehold.jp/100x100.png'
  })

  const router = useRouter()
  const productId = ~~(router.query.productId as string)
  const { data: initialProduct, revalidate } = useAspidaSWR(
    apiClient.products._productId(productId)
  )

  useEffect(() => {
    if (initialProduct) {
      setFormProduct(initialProduct)
    }
  }, [initialProduct])

  const onSubmit = useCallback(async () => {
    await apiClient.products._productId(productId).put({
      body: formProduct
    })
    await revalidate()
    router.push(`/products/${productId}`)
  }, [formProduct, productId])
  return (
    <div className="container">
      <Head>
        <title>ProductEdit</title>
      </Head>
      <Header />
      <ProductForm
        formProduct={formProduct}
        onChange={setFormProduct}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default ProductEdit

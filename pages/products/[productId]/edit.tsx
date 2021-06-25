import Head from 'next/head'
import { useCallback, useState } from 'react'
import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'
import type { Task } from '$prisma/client'
import type { FormEvent, ChangeEvent } from 'react'
import ProductForm from '~/components/ProductForm'
import Header from '~/components/Header'
import { Product } from '$/types'

const ProductEdit = () => {
  const [product, setProduct] = useState<Product>({
    id: 123,
    name: '',
    nutritionImageUrl: '//placehold.jp/100x100.png',
    amazonUrl: '',
    coverImageUrl: '//placehold.jp/100x100.png',
    createdAt: '2022-01-23 12:12:12'
  })
  const onSubmit = () => {
    console.log(product)
  }
  return (
    <div className="container">
      <Head>
        <title>ProductEdit</title>
      </Head>
      <Header />
      <ProductForm
        product={product}
        onChange={setProduct}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default ProductEdit

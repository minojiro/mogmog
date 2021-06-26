import Head from 'next/head'
import { useCallback, useState } from 'react'
import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/Home.module.css'
import { apiClient } from '~/utils/apiClient'
import type { Task } from '$prisma/client'
import type { FormEvent, ChangeEvent } from 'react'
import Link from 'next/link'
import Header from '~/components/Header'
import { useRouter } from 'next/router'

const ProductShow = () => {
  const router = useRouter()
  const productId = ~~(router.query.productId as string)
  const { data: product } = useAspidaSWR(
    apiClient.products._productId(productId)
  )

  if (!product) return <div></div>

  return (
    <div className="container">
      <Head>
        <title>{product.name} | 成分表投稿サイト mog2（もぐもぐ）</title>
      </Head>
      <Header />
      <h2 className="title is-2 mb-10">{product.name}</h2>
      <figure className="image is-128x128 mb-5">
        <img src={product.coverImageUrl} alt="" />
      </figure>
      <figure className="image is-128x128 mb-5">
        <img src={product.nutritionImageUrl} alt="" />
      </figure>
      <div className="table-container">
        <table className="table is-bordered is-fullwidth">
          <tr>
            <th>商品名</th>
            <td>{product.name}</td>
          </tr>
          {/* <tr>
            <th>成分一覧</th>
            <td>hoge</td>
          </tr> */}
          <tr>
            <th>Amazon URL</th>
            <td>{product.amazonUrl}</td>
          </tr>
          <tr>
            <th>投稿日</th>
            <td>{product.createdAt}</td>
          </tr>
        </table>
      </div>
      <Link href={product.amazonUrl}>
        <a
          className="button is-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazon で購入
        </a>
      </Link>
      <br />
      <br />
      <br />
      <Link href={`/products/${product.id}/edit`}>
        <a className="button">編集</a>
      </Link>
    </div>
  )
}

export default ProductShow

import Head from 'next/head'
import { useCallback, useState } from 'react'
import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/Home.module.css'
import { apiClient } from '~/utils/apiClient'
import type { Task } from '$prisma/client'
import type { FormEvent, ChangeEvent } from 'react'
import Link from 'next/link'
import Header from '~/components/Header'

const ProductShow = () => {
  return (
    <div className="container">
      <Head>
        <title>ProductShow</title>
      </Head>
      <Header />
      <h2 className="title is-2 mb-10">hoge</h2>
      <figure className="image is-128x128 mb-5">
        <img src="//placehold.jp/400x400.png" alt="" />
      </figure>
      <figure className="image is-128x128 mb-5">
        <img src="//placehold.jp/400x400.png" alt="" />
      </figure>
      <div className="table-container">
        <table className="table is-bordered is-fullwidth">
          <tr>
            <th>商品名</th>
            <td>hoge</td>
          </tr>
          <tr>
            <th>成分一覧</th>
            <td>hoge</td>
          </tr>
          <tr>
            <th>Amazon URL</th>
            <td>hoge</td>
          </tr>
          <tr>
            <th>投稿日</th>
            <td>hoge</td>
          </tr>
        </table>
      </div>
      <Link href={`/products/000/edit`}>
        <a className="button is-primary">Amazon で購入</a>
      </Link>
      <br />
      <br />
      <br />
      <Link href={`/products/000/edit`}>
        <a className="button">編集</a>
      </Link>
    </div>
  )
}

export default ProductShow

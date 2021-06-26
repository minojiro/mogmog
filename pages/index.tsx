import { apiClient } from '~/utils/apiClient'
import { Product } from '$/types'
import { useDebounce } from 'use-debounce'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '~/components/Header'
import InputSearchText from '~/components/InputSearchText'
import ProductList from '~/components/ProductList'
import useAspidaSWR from '@aspida/swr'

const Home = () => {
  const { data: products } = useAspidaSWR(apiClient.products)
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([])
  const [searchWord, setSearchWord] = useState('')
  const [debounceSearchWord] = useDebounce(searchWord, 200)

  useEffect(() => {
    apiClient.products
      .get({ query: { q: debounceSearchWord } })
      .then(({ body }) => {
        setSearchedProducts(body)
      })
  }, [debounceSearchWord])

  return (
    <div className="container">
      <Head>
        <title>成分表投稿サイト mog2（もぐもぐ）</title>
      </Head>

      <main>
        <Header />
        <div className="mb-5">
          <InputSearchText
            onChange={(e) => setSearchWord(e.target.value)}
            value={searchWord}
          />
        </div>
        {debounceSearchWord !== '' ? (
          <ProductList
            products={searchedProducts}
            title={`${debounceSearchWord} での検索結果`}
          />
        ) : (
          products && <ProductList products={products} title="新着一覧" />
        )}
      </main>
    </div>
  )
}

export default Home

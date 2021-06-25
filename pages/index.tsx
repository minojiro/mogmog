import Head from 'next/head'
import Link from 'next/link'
import Header from '~/components/Header'
import Pagenation from '~/components/Pagenation'
import ProductList from '~/components/ProductList'
import InputSearchText from '~/components/InputSearchText'
import { Product } from '$/types'

const Home = () => {
  const products: Product[] = Array.from({ length: 10 }, (_, id) => ({
    id,
    name: 'hoge',
    nutritionImageUrl: '//placehold.jp/100x100.png',
    amazonUrl: 'https://www.amazon.co.jp/dp/B082W3LBSK',
    coverImageUrl: '//placehold.jp/100x100.png',
    createdAt: '2022-01-23 12:12:12'
  }))
  return (
    <div className="container">
      <Head>
        <title>成分表投稿サイト mog2（もぐもぐ）</title>
      </Head>

      <main>
        <Header />
        <div className="mb-5">
          <InputSearchText />
        </div>
        <ProductList products={products} />
      </main>
    </div>
  )
}

export default Home

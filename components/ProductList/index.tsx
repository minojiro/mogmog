import { Product } from '$/types'
import Link from 'next/link'

const ProductList = ({ products }: { products: Product[] }) => {
  const renderProduct = (product: Product) => (
    <li key={product.id}>
      <Link href={`/products/${product.id}`}>
        <a className="panel-block">
          <p>
            <img src={product.coverImageUrl} alt={product.name} />
          </p>
          <p>{product.name}</p>
        </a>
      </Link>
    </li>
  )
  return (
    <ul className="panel">
      <p className="panel-heading">新着一覧</p>
      {products.map(renderProduct)}
    </ul>
  )
}

export default ProductList

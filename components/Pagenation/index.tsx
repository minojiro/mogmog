import { Product } from '$/types'
import React from 'react'

const ProductForm = () => {
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <ul className="pagination-list">
        <li>
          <a
            className="pagination-link is-current"
            aria-label="Page 1"
            aria-current="page"
          >
            1
          </a>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 2">
            2
          </a>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 3">
            3
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default ProductForm

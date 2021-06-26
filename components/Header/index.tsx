import { Product } from '$/types'
import React from 'react'
import Link from 'next/link'

const ProductForm = () => {
  return (
    <div>
      <p>みんなで作る成分表投稿サイト もぐもぐ</p>
      <nav className="navbar pt-6 pb-6">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src="/mogmog-logo.svg"
              width="100"
              style={{ maxHeight: 'unset' }}
              alt="mogmog"
            />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item">食品一覧</a>
            </Link>
            <Link href="/products/new">
              <a className="navbar-item">新規追加</a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default ProductForm

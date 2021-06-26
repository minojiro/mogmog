import { FormProduct } from '$/types'
import React from 'react'

import ImageUploader from '~/components/ImageUploader'

const ProductForm = ({
  formProduct,
  onChange,
  onSubmit
}: {
  formProduct: FormProduct
  onChange: (formProduct: FormProduct) => void
  onSubmit: () => void
}) => {
  const updatePartial = (partial: Partial<FormProduct>) => {
    onChange({
      ...formProduct,
      ...partial
    })
  }
  return (
    <form
      onSubmit={(e) => {
        onSubmit()
        e.preventDefault()
      }}
    >
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            type="text"
            className="input"
            value={formProduct.name}
            onChange={(e) => updatePartial({ name: e.target.value })}
            placeholder="name"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Amazon 商品ページ URL</label>
        <div className="control">
          <input
            type="text"
            className="input"
            value={formProduct.amazonUrl}
            onChange={(e) => updatePartial({ amazonUrl: e.target.value })}
            placeholder="amazonUrl"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">表の画像</label>
        <div className="control">
          <ImageUploader />
        </div>
      </div>

      <div className="field">
        <label className="label">成分表の画像</label>
        <div className="control">
          <ImageUploader />
        </div>
      </div>

      <div className="control">
        <button className="button is-link" type="submit">
          投稿
        </button>
      </div>
    </form>
  )
}

export default ProductForm

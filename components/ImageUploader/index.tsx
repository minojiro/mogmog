import { Product } from '$/types'
import React from 'react'

const ImageUploader = () => {
  return (
    <div>
      <figure className="image is-96x96 mb-1">
        <img src="//placehold.jp/400x400.png" alt="" />
      </figure>
      <div className="file is-boxed">
        <label className="file-label">
          <input className="file-input" type="file" name="resume" />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">Choose a file…</span>
          </span>
        </label>
      </div>
    </div>
  )
}

export default ImageUploader

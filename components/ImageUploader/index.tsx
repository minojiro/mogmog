import React, { useCallback, useState } from 'react'
import axios from 'axios'

const IMGUR_URL = 'https://api.imgur.com/3/upload'
const IMGUR_OPTIONS = {
  headers: {
    Authorization: `Client-ID b93f7379887a66c`
  }
}

const uploadImage = async (base64Image: string): Promise<string> => {
  try {
    const params = {
      image: base64Image,
      type: 'base64'
    }
    const { data } = await axios.post(IMGUR_URL, params, IMGUR_OPTIONS)
    console.log(data)
  } catch (err) {
    console.error(err)
  }
  return ''
}

const ImageUploader = () => {
  const [imageUrl, setImageUrl] = useState('')
  const inputFileOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files && e.target.files[0]
      if (!file) {
        return
      }
      const reader = new FileReader()
      reader.addEventListener(
        'load',
        async () => {
          const base64Image = String(reader.result)
          setImageUrl(await uploadImage(base64Image))
        },
        false
      )

      if (file) {
        reader.readAsDataURL(file)
      }
    },
    []
  )

  return (
    <div>
      {imageUrl && (
        <figure className="image is-96x96 mb-1">
          <img src={imageUrl} alt="" />
        </figure>
      )}
      <div className="file is-boxed">
        <label className="file-label">
          <input
            className="file-input"
            type="file"
            name="resume"
            onChange={inputFileOnChange}
          />
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

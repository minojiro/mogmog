import { Product } from '$/types'
import React, { InputHTMLAttributes } from 'react'

const InputSearchText = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input type="text" className="input" placeholder="食品名" {...props} />
}

export default InputSearchText

'use client'

import { FormEvent } from 'react'

type InputProps = {
  className?: string
  onInput?: (e :  FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  [x: string]: any
}

const classes = `p-2 border rounded-md border-gray-400 text-gray-100 placeholder:text-gray-500 bg-gray-900 outline-none focus:outline-none focus:border-0 focus:ring focus:ring-purple-500/50`


function TextArea({ className, onInput,...props }: InputProps)
{
  return (
    <textarea
      onInput={onInput}
      className={`${classes} ${className}`}
      {...props}
    ></textarea>
  )
}


function Input({ className, onInput,...props }: InputProps) {
  return (
    <input
      onInput={onInput}
      className={`${classes} ${className}`}
      {...props}
    />
  )
}

Input.TextArea = TextArea

export default Input

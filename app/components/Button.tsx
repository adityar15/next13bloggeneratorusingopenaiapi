import React from 'react'

type ButtonProps = {
    className?: string
    onClick?: () => void
    [x: string]: any
    children?: React.ReactNode
}

export default function Button({onClick, className, children,...props}: ButtonProps) {
  return (
    <button className={`px-6 py-2 outline-none focus:outline-none bg-gradient-to-r from-sky-600 to-purple-600 rounded-md text-gray-50 ${className}`} onClick={onClick} {...props}>
        {children}
    </button>
  )
}
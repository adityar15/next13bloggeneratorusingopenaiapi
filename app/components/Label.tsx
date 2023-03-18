import React from 'react'

type LabelProps = {
    className?: string
    children: React.ReactNode
    [x: string]: any
}

export default function Label({className, children, ...props}: LabelProps) {
  return (
    <label className={`font-semibold text-gray-300 tracking-wide ${className}`} {...props}>
        {children}
    </label>
  )
}
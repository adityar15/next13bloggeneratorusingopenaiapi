"use client"

import React from 'react'
import {Provider} from 'react-redux'
import store from "../../utils/client/store"
type Props = {
    children: React.ReactNode
}

export default function ClientProvider({children}: Props) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
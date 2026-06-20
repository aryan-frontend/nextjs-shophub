"use client"
import React from 'react'
import { store } from './store'
import { Provider } from 'react-redux'
import CartLoader from '@/hooks/CartLoader'

export default function ReduxProvider({children}) {
  return (
    <Provider store={store}>
      <CartLoader/>
        {children}
    </Provider>
  )
}

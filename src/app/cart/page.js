import CartList from '@/components/cart/CartList'
import OrderSummery from '@/components/cart/OrderSummery'
import React from 'react'

export default function Cart() {
  return (
    <div className='lg:flex gap-10 pt-30  px-6 dark:bg-white'>
        <CartList/>
        <OrderSummery/>
    </div>
  )
}

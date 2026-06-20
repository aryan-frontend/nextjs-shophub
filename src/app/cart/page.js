import CartList from '@/components/cart/CartList'
import OrderSummery from '@/components/cart/OrderSummery'
import React from 'react'

export default function Cart() {
  return (
    <div className='lg:flex gap-10 mt-30  mx-6'>
        <CartList/>
        <OrderSummery/>
    </div>
  )
}

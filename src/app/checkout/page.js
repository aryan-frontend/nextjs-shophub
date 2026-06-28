import CheckOrderSummery from '@/components/checkout/CheckOrderSummery'
import UserInfo from '@/components/checkout/UserInfo'
import React from 'react'

export default function page() {
  return (
    <>
    <h1 className='font-bold text-3xl pt-30 px-5 mb-10'>Checkout</h1>
    <div className='flex flex-col md:flex-row  gap-7 px-5'>
        <UserInfo/>
        <CheckOrderSummery/>
    </div>
    </>
    
  )
}

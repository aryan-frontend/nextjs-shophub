import CheckOrderSummery from '@/components/checkout/CheckOrderSummery'
import UserInfo from '@/components/checkout/UserInfo'
import React from 'react'

export default function page() {
  return (
    <>
    <h1 className='font-bold text-3xl pt-30 px-5 pb-10 dark:bg-white dark:text-black'>Checkout</h1>
    <div className='flex flex-col md:flex-row  gap-7 px-5 dark:bg-white'>
        <UserInfo/>
        <CheckOrderSummery/>
    </div>
    </>
    
  )
}

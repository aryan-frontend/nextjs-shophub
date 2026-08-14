import UserInput from '@/ui/UserInput'
import React from 'react'
import { FaWallet } from 'react-icons/fa6'

export default function UserInfo() {
  return (
    <form action="" className='pb-20 w-full md:w-[70%] dark:text-black dark:bg-white'>

      <div className='p-5 mb-10 bg-white rounded-2xl shadow-xl '>
        <h2 className='text-2xl font-bold mb-5'>Contact Information</h2>
        <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 '>
          <UserInput name={"First Name"} />
          <UserInput name={"Last Name"} />
          <UserInput name={"Email"} />
          <UserInput name={"Phone"} />
        </div>
      </div>

      <div className='p-5 mb-10 bg-white rounded-2xl shadow-xl'>
        <h2 className='text-2xl font-bold mb-5'>Shipping Address</h2>
        <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
          <UserInput name={"Street Address"} />
          <UserInput name={"City"} />
          <UserInput name={"State"} />
          <UserInput name={"ZIP Code"} />
        </div>
      </div>

      <div className='p-5 mb-10 bg-white rounded-2xl shadow-xl'>
        <h2 className='text-2xl font-bold mb-5 flex gap-2 items-center'> <FaWallet/> Payment Information</h2>
        <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 '>
          <UserInput name={"Card Number"} />
          <UserInput name={"Expiry Date"} />
          <UserInput name={"CVV"} />
        </div>
      </div>
    </form>
  )
}

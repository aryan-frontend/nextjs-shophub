"use client"
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

export default function OrderSummery() {
  let cart = useSelector((mystore) => mystore.cartStore.cart);
  let subTotal = cart.reduce((tot, obj) => tot += obj.qty * obj.price, 0)
  let taxRate = 10;
  let tax = (subTotal * taxRate) / 100;
  let total = subTotal + tax;
  return (
    <div className='lg:w-[30%] w-full shadow-2xl rounded-2xl p-7 mt-10 mb-30'>
          <h3 className='font-bold mb-5 text-2xl'>Order Summary</h3>
          <div className='flex flex-col gap-5 mb-7'>
            <div className='flex items-center justify-between'>
              <span>Subtotal</span>
              <span>Rs. {subTotal.toFixed(2)} </span>
            </div>
            <div className='flex items-center justify-between'>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className='flex items-center justify-between'>
                <span>Tax(10%)</span>
                <span>Rs. {tax.toFixed(2)}</span>
              </div>
            <hr className='text-gray-200' />
            <div className='flex items-center justify-between'>
              <span className='font-bold text-xl'>Total</span>
              <span className='text-blue-600 text-xl font-bold'>Rs. {total.toFixed(2)} </span>
            </div>
            <Link href={"/checkout"} className=' text-center w-full p-3 bg-blue-600 text-white font-bold rounded-xl'>Proceed to Checkout</Link>
            <Link href={"/products"} className=' text-center w-full p-3 rounded-xl mb-3 border-2 border-gray-500'>Continue Shopping</Link>
          </div>
        </div>
  )
}

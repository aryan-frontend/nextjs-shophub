"use client"
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

export default function CheckOrderSummery() {
    let cart = useSelector((mystore) => mystore.cartStore.cart);
    console.log(cart)
    let subTotal = cart.reduce((tot, obj) => tot += obj.qty * obj.price, 0)
    let taxRate = 10;
    let tax = (subTotal * taxRate) / 100;
    let total = subTotal + tax;

    let placeOrder = () => {
        alert("Your Order Placed Successfully");
    }
    return (
        <div className='lg:w-[30%] w-full shadow-xl rounded-2xl md:p-5 p-1 mb-10 h-fit self-start  dark:text-black dark:bg-white'>
            <h3 className='font-bold mb-5 md:text-2xl text-xl md:text-start text-center'>Order Summary</h3>
            {
                cart.map((items, idx) => (
                    <div className='flex  items-center justify-between p-2 m-2 bg-gray-50' key={idx}>
                        <div className='flex  items-center justify-center gap-3'>
                            <div className='md:h-25 md:w-25 w-15 bg-gray-200 rounded-md shrink-0'>
                                <img src={items.img} className='rounded-2xl h-full w-full object-cover' />
                            </div>
                            <div>
                                <h3 className='font-bold text-sm'>{items.title}</h3>
                                <span>Qty: {items.qty}</span>
                            </div>
                        </div>

                        <span className='font-bold text-blue-600 text-sm'>${items.price}</span>

                    </div>
                ))
            }

            <hr className='text-gray-200 my-5' />
            <div className='flex flex-col gap-5 mb-7'>
                <div className='flex items-center justify-between'>
                    <span>Subtotal</span>
                    <span>Rs. {subTotal} </span>
                </div>
                <div className='flex items-center justify-between'>
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div className='flex items-center justify-between'>
                    <span>Tax(10%)</span>
                    <span>Rs. {(tax).toFixed(2)} </span>
                </div>
                <hr className='text-gray-200' />
                <div className='flex items-center justify-between'>
                    <span className='font-bold text-xl'>Total</span>
                    <span className='text-blue-600 text-xl font-bold'>Rs. {(total).toFixed(2)} </span>
                </div>
                <Link href={"/checkout"} onClick={placeOrder} className=' text-center w-full p-3 bg-blue-600 text-white font-bold rounded-xl'>Place Order</Link>
                <p className='text-center text-md'>By placing your order, you agree to our terms and conditions</p>
            </div>
        </div>
    )
}

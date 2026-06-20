"use client"
import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

export default function CartList() {
    let cart = useSelector((mystore) => mystore.cartStore.cart);

    return (
        <div className='lg:w-[70%] w-full'>
            {
                cart.length > 0
                    ?
                    cart.map((cartObject, idx) => (
                        <CartItem cartObject={cartObject} key={idx}/>
                    ))

                    :
                    <p className='text-2xl font-bold text-center mt-40'>No data found</p>
            }


        </div>
    )
}

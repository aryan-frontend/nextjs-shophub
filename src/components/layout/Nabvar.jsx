"use client"
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux';

export default function Nabvar({ isOpen, setIsOpen }) {
  let cart = useSelector((mystore) => mystore.cartStore.cart);
  let totalQty = cart.reduce((total, item) => total + item.qty, 0)
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav className={`flex flex-col lg:flex-row gap-5 lg:gap-10 fixed lg:static top-18 ${isOpen ? 'left-0' : '-left-full'} dark:text-black bg-gray-300 lg:bg-transparent p-5 lg:p-0 w-[80%] lg:w-auto h-full lg:h-auto duration-300 lg:duration-0`}>
      <Link onClick={closeMenu} href={"/"}>Home</Link>
      <Link onClick={closeMenu} href={"/products"}>Products</Link>
      <Link onClick={closeMenu} href={"/about"}>About</Link>
      <Link onClick={closeMenu} href={"/cart"} className='relative'>Cart
        {
          totalQty > 0
            ?
            <div className='w-6 h-6  bg-blue-500 text-white hidden md:flex items-center justify-center rounded-full absolute -top-2 -right-5'>
              {totalQty}
            </div>
            :
            <span></span>
        }
      </Link>
      <Link href={"/login"}>Login</Link>
    </nav>
  )
}

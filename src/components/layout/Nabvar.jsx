import Link from 'next/link'
import React from 'react'

export default function Nabvar({ isOpen, setIsOpen }) {
  return (
    <nav className={`flex flex-col lg:flex-row gap-5 lg:gap-10 fixed lg:static top-18 ${isOpen ? 'left-0' : '-left-full'} bg-gray-300 lg:bg-transparent p-5 lg:p-0 w-[80%] lg:w-auto h-full lg:h-auto duration-300 lg:duration-0`}>
      <Link href={"/"}>Home</Link>
      <Link href={"/products"}>Products</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/cart"}>Cart</Link>
      <Link href={"/login"}>Login</Link>
    </nav>
  )
}

"use client"
import React, { useState } from 'react'
import Nabvar from './Nabvar'
import Link from 'next/link'
import { IoMenu } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='flex items-center justify-between p-5 border-b border-gray-400 fixed w-full bg-white z-10'>
      <Link href={"/"} className='text-2xl dark:text-black font-bold'>Shophub</Link>
      <Nabvar isOpen={isOpen} setIsOpen={setIsOpen} />
      <button onClick={() => setIsOpen(!isOpen)} className='block lg:hidden text-2xl dark:text-black'> {
        isOpen ? <RxCross2 /> : <IoMenu />
      }
      </button>
    </header>
  )
}

"use client"
import { useCart } from "@/hooks/useCart"
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6"

export default function CartItem({cartObject}) {
  const { removeCartItem, changeItemQty } = useCart()
  return (
    <div className='shadow-2xl rounded-2xl p-5 my-10 md:flex gap-7 items-center'>

      <div className='h-30 md:w-30 w-full shrink-0'>
        <img src={cartObject.img} className='rounded-2xl h-full w-full object-cover' />
      </div>

      <div className='flex-1 mt-5'>
        <div className='flex justify-between items-start mb-6'>
          <div>
            <h3 className='text-xl font-semibold'>{cartObject.title}</h3>
            <span className='text-gray-500'></span>
          </div>
          <FaTrash onClick={(e) => removeCartItem(e, cartObject.id)} />
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex items-center overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm'>
            <button
              type='button'
              aria-label='Decrease quantity'
              className='flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'
              onClick={() => changeItemQty("-", cartObject.id , cartObject.qty)}
            >
              <FaMinus className='text-sm' />
            </button>
            <label className='sr-only'>
              Quantity
            </label>
            <input
              type='number'
              min='1'
              value={cartObject.qty}
              readOnly
              className='h-10 w-12 border-x border-gray-200 bg-transparent text-center text-sm font-medium text-gray-900 outline-none [appearance:textfield] focus:ring-2 focus:ring-inset focus:ring-blue-500'
              
            />
            <button
              type='button'
              aria-label='Increase quantity'
              className='flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'
              onClick={() => changeItemQty("+", cartObject.id, cartObject.qty)}
            >
              <FaPlus className='text-sm' />
            </button>
          </div>

          <span className='text-blue-600 text-xl font-bold'>
            Rs. {(cartObject.price * cartObject.qty).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}

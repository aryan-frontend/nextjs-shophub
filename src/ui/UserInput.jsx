import React from 'react'

export default function UserInput({name}) {
  return (
    <>
    <div className='flex flex-col'>
      <label htmlFor="name" className='mb-2'>{name}</label>
      <input type="text" className=' p-2 border-2 rounded-md border-gray-700' />
    </div>
    </>
    
  )
}

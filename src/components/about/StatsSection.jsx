import { stats } from '@/data/aboutdata'
import React from 'react'

export default function StatsSection() {
    return (
        <div className='py-15 px-6 bg-black text-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-baseline'>
                {
                    stats.map((item, idx) => (
                        <div className='flex flex-col items-center justify-center text-center' key={idx}>
                            <h2 className='text-md my-2 font-bold text-4xl'>{item.rate}</h2>
                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

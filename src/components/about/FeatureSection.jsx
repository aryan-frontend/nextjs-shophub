import { features } from '@/data/aboutdata'
import React from 'react'

export default function FeatureSection() {
    return (
        <div className='py-15 px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-baseline'>
                {
                    features.map((item, idx) => (
                        <div className='flex flex-col items-center justify-center text-center' key={idx}>
                            <div className='flex items-center justify-center p-5 rounded-full bg-blue-200 h-16 w-16 text-4xl'>
                                {item.icon}
                            </div>
                            <h2 className='text-md my-2 font-bold'>{item.title}</h2>
                            <p>{item.disc}</p>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

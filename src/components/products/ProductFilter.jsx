import React from 'react'
import { CiFilter } from 'react-icons/ci'
import { FaSearch } from 'react-icons/fa'

export default function ProductFilter({ category, selectCategory, setSelectCategory, sortOption, setSortOption, searchTerm, setSearchTerm }) {

    return (
        <div className='p-6 dark:text-black'>
            <div className=' shadow-2xl bg-white p-6 rounded-xl md:sticky top-18'>
                <span className='flex items-center gap-2 text-xl mb-6' ><CiFilter />Filter</span>
                <div className='flex items-center border-2 border-gray-700 rounded-3xl p-1'>
                    <FaSearch className='text-xl'/>
                    <input type="text" className='p-2 focus:outline-none' placeholder='search products...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                </div>
                <div className='my-6'>
                    <label className='font-bold text-xl'>Categories</label>
                    <select className='p-3 mt-2 border rounded-2xl w-full' name="categories" id="categories" onChange={(e) => setSelectCategory(e.target.value)} value={selectCategory} >
                        <option value="all">All</option>
                        {
                            category.map((cat, idx) => (
                                <option key={idx} value={cat.slug}>{cat.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label className='text-xl font-bold'>sort By</label>
                    <select className='p-3 mt-2 border rounded-2xl w-full' onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
                        <option>Featured</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Highest Rated</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

"use client"
import { getProducts } from '@/services/productService';
import React, { useEffect, useState } from 'react'

export default function useProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchProducts() {
            let request = await getProducts();
            let data = request.data.products;
            setProducts([...data])
        }
        fetchProducts();
    }, [])
  return {
    products
  }
}

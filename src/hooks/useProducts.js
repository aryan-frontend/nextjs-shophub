"use client"
import { getCategories, getCategoryProducts, getProducts } from '@/services/productService';
import React, { useEffect, useState } from 'react'

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState("all");
  const [sortOption, setSortOption] = useState("Featured");
  const [searchTerm, setSearchTerm] = useState("")
  useEffect(() => {
    async function fetchProducts() {
      let request;
      if (selectCategory === "all") {
        request = await getProducts();
      }
      else {
        request = await getCategoryProducts(selectCategory);
      }
      let data = request.data.products;
      if (sortOption === "Price: Low to High") {
        data = data.sort((a, b) => a.price - b.price);
      }
      else if (sortOption === "Price: High to Low") {
        data = data.sort((a, b) => b.price - a.price);
      }
      else if (sortOption === "Highest Rated") {
        data = data.sort((a, b) => b.rating - a.rating);
      }

      if (searchTerm.trim()) {
        data = data.filter((product) => 
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }

      setProducts([...data])
    }
    fetchProducts();
  }, [selectCategory, sortOption, searchTerm])

  useEffect(() => {
    async function fetchCategoriesProducts() {
      const request = await getCategories();
      setcategory(request.data)
    }
    fetchCategoriesProducts();
  }, [])


  return {
    products, category, selectCategory, setSelectCategory, sortOption, setSortOption, searchTerm, setSearchTerm
  }
}

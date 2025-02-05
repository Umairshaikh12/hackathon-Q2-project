"use client";

import { useEffect, useState } from "react";
import { Product } from "../../types/products";
import { client } from "@/sanity/lib/client";
import { four } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Hero from "./components/Hero";
import Products from "./components/Product";
import Link from "next/link";
import Pagination from "./components/Pagination"; // Import Pagination Component

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(8); // Customize number of products per page

  // Fetch products from the Sanity database
  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(four);
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  // Handle search query change
  useEffect(() => {
    let result = products.filter((product) => {
      return (
        (product.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description?.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedCategory ? product.category?.toLowerCase() === selectedCategory.toLowerCase() : true)
      );
    });

    setFilteredProducts(result);
  }, [searchQuery, selectedCategory, products]);

  // Get the current page products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* New Arrivals Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">New Arrivals - Discover Our Latest Collection</h2>
          <p className="text-lg mb-8 text-gray-600">Explore our fresh, new styles to elevate your wardrobe.</p>

          {/* Search and Filter Section */}
          <div className="flex justify-center space-x-6 mb-8">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border p-3 rounded-md w-64 focus:outline-none"
            />

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border p-3 rounded-md w-64 focus:outline-none"
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
              {/* Add more categories as needed */}
            </select>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
        {currentProducts.map((product) => (
          <div key={product._id} className="p-4 border rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300">
            <Link href={product.slug?.current ? `/product/${product.slug.current}` : "#"}>
              {product.productImage && (
                <Image
                  src={urlFor(product.productImage).url()}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="rounded-md object-cover w-full h-64 mb-4"
                />
              )}
            </Link>

            {/* Product Name */}
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>

            {/* Product Price */}
            {product.price && (
              <p className="text-green-600 font-bold text-lg mb-2">Price: ${product.price}</p>
            )}

            {/* Product Description */}
            {product.description && (
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
            )}

            {/* Add to Cart or View Product */}
            <Link href={product.slug?.current ? `/product/${product.slug.current}` : "#"}>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                View Product
              </button>
            </Link>
          </div>
        ))}
      </section>

      {/* Pagination */}
      <section className="py-8 text-center">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
          onPageChange={paginate}
        />
      </section>

      {/* Other Sections (Products, Hero, etc.) */}
      <Products />
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

// Example category data
const categories = [
  { id: 1, name: 'Electronics', imageUrl: '/path-to-electronics-image.jpg' },
  { id: 2, name: 'Clothing', imageUrl: '/path-to-clothing-image.jpg' },
  { id: 3, name: 'Books', imageUrl: '/path-to-books-image.jpg' },
  { id: 4, name: 'Furniture', imageUrl: '/path-to-furniture-image.jpg' },
  // Add more categories here
];

// Example popular products data
const popularProducts = [
  { id: 1, name: 'Smartphone', price: '$499', imageUrl: '/path-to-smartphone-image.jpg' },
  { id: 2, name: 'Sneakers', price: '$120', imageUrl: '/path-to-sneakers-image.jpg' },
  { id: 3, name: 'Laptop', price: '$999', imageUrl: '/path-to-laptop-image.jpg' },
  { id: 4, name: 'Bookshelf', price: '$250', imageUrl: '/path-to-bookshelf-image.jpg' },
  // Add more popular products here
];

const CategoryPage = () => {
  return (
    <div className="category-page-container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">Categories</h1>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="category-card bg-white shadow-md rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <a href={`/category/${category.id}`} className="block">
              <div className="relative">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xl font-semibold">
                    View {category.name}
                  </span>
                </div>
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold">{category.name}</h2>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Popular Products Section */}
      <h2 className="text-3xl font-bold text-center mb-10">Popular Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {popularProducts.map((product) => (
          <motion.div
            key={product.id}
            className="product-card bg-white shadow-md rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <a href={`/product/${product.id}`} className="block">
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-blue-600 font-semibold mt-2">{product.price}</p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

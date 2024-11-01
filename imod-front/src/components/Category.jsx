import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import { getProducts } from '../services';
import { Link } from 'react-router-dom';

// Example category data
const categories = [
  { id: 1, name: 'Electronics', imageUrl: img1 },
  { id: 2, name: 'Clothing', imageUrl: img2 },
  { id: 3, name: 'Books', imageUrl: img3 },
  // Add more categories here
];

const CategoryPage = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setPopularProducts(data);
        
      } catch (err) {
        setError('Failed to fetch products');
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="category-page-container max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">Категории продуктов</h1>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="category-card bg-white shadow-md rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to={`/products`} className="block">
              <div className="relative">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-48 sm:h-64 lg:h-72 object-cover"
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
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Popular Products Section */}
      <h2 className="text-3xl font-bold text-center mb-10">Лучшие продукты</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {popularProducts.map((product) => (
          <motion.div
            key={product.id}
            className="product-card bg-white shadow-md rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to={`/products`} className="block">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 sm:h-64 lg:h-72 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

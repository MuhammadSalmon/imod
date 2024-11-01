import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = ({ news }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 transition-transform duration-500 ease-in-out">
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={news.imageUrl}
          alt={news.title}
          className="w-full h-48 object-cover transition-transform duration-500 transform hover:scale-110"
        />
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{news.title}</h2>
        <Link to={`/news/${news.id}`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transform transition-transform duration-300 hover:scale-110">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;

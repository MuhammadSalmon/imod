import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './News_Items';
import LoadingSpinner from '../components/Spinner';

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/news/'); // Update this URL to your actual API endpoint
        setNewsData(response.data); // Assuming the response data is an array of news items
      } catch (err) {
        setError("Unable to fetch news items.");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) return <LoadingSpinner />
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">Новости компании</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <NewsItem 
            key={news.id} 
            news={{ ...news, imageUrl: news.images[0]?.image }} 
          />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import LoadingSpinner from '../components/Spinner';

const NewsDetails = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/news/${id}/`);
        setNewsItem(response.data);
      } catch (err) {
        setError("Unable to fetch news item.");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [id]);

  if (loading) 
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <LoadingSpinner />
      </div>
    );

  if (error) return <div className="text-center text-red-600">{error}</div>;
  if (!newsItem) return <div className="text-center text-gray-700">News item not found</div>;

  const sliderSettings = {
    dots: newsItem.images.length > 1,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dotsClass: 'slick-dots slick-thumb flex justify-center space-x-2 mt-4',
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">{newsItem.title}</h1>
          <p className="text-center text-gray-600 mb-4">
            By {newsItem.author} | {new Date(newsItem.custom_date).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-6">{newsItem.content}</p>
        </div>

        {newsItem.images.length > 1 ? (
          <Slider {...sliderSettings}>
            {newsItem.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 md:h-[500px] object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="mb-4">
            <img
              src={newsItem.images[0]?.url}
              alt="Single Image"
              className="w-full h-64 md:h-[500px] object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetails;

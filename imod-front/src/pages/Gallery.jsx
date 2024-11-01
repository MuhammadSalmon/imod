import img from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import React, { useState } from 'react';
import LoadingSpinner from '../components/Spinner'; // Import your loading spinner

const photos = [
  { src: img, alt: 'Image 1' },
  { src: img2, alt: 'Image 2' },
  { src: img3, alt: 'Image 3' },
  { src: img2, alt: 'Image 4' },
  { src: img, alt: 'Image 5' },
  { src: img2, alt: 'Image 6' },
  { src: img3, alt: 'Image 7' },
  { src: img2, alt: 'Image 8' },
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateModal, setAnimateModal] = useState(false);
  const [loading, setLoading] = useState(true); // State to track loading

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setTimeout(() => setAnimateModal(true), 50); // Add slight delay to trigger animation
  };

  const closeModal = () => {
    setAnimateModal(false);
    setTimeout(() => setIsOpen(false), 200); // Wait for animation to complete before closing
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            className="w-full h-auto rounded shadow-lg cursor-pointer hover:opacity-75 transition-opacity"
            onClick={() => openModal(index)}
            onLoad={() => setLoading(false)} // Set loading to false when image loads
            onError={() => setLoading(false)} // Set loading to false if there's an error
          />
        ))}
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex items-center justify-center my-4">
          <LoadingSpinner /> {/* Show loading spinner */}
        </div>
      )}

      {/* Modal for viewing images */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 transition-opacity duration-300">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={closeModal}
          >
            &times;
          </button>

          <button
            className="absolute left-4 text-white text-3xl font-bold"
            onClick={goToPrevious}
          >
            &#10094;
          </button>

          <div
            className={`relative max-w-4xl max-h-full flex items-center justify-center transition-transform duration-300 ${
              animateModal ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`}
          >
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="w-full h-auto max-h-screen object-contain rounded-lg shadow-lg"
            />
          </div>

          <button
            className="absolute right-4 text-white text-3xl font-bold"
            onClick={goToNext}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;

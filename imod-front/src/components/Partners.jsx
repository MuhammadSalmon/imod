import React from 'react';
import Slider from 'react-slick';
// Example logos (replace these paths with actual partner logos)
import logo1 from '../assets/tgem.png';
import logo2 from '../assets/rogun.png';
import logo3 from '../assets/tgem.png';
import logo4 from '../assets/rogun.png';


const partners = [
  { id: 1, name: 'Partner 1', logo: logo1 },
  { id: 2, name: 'Partner 2', logo: logo2 },
  { id: 3, name: 'Partner 3', logo: logo3 },
  { id: 4, name: 'Partner 4', logo: logo4 },
  
];

const Partners = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Large screens (tablets, laptops)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative container mx-auto px-4 py-12">
      <div className="w-full lg:w-3/4 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Наши Партнери</h2>
        
        {/* Single Slider wrapping all partner items */}
        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.id} className="p-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-40 w-auto object-contain mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;

import React from 'react';

// Example data for the services
const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and dynamic web applications tailored to your needs using modern web technologies.',
    imageUrl: 'https://via.placeholder.com/100/0000FF/FFFFFF?text=Web+Dev', // Replace with actual image URL
  },
  {
    title: 'Mobile App Development',
    description: 'Creating seamless and high-performance mobile applications for iOS and Android platforms.',
    imageUrl: 'https://via.placeholder.com/100/FF0000/FFFFFF?text=Mobile+App',
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting user-friendly and intuitive interfaces to ensure the best experience for your users.',
    imageUrl: 'https://via.placeholder.com/100/00FF00/FFFFFF?text=UI/UX',
  },
  {
    title: 'Cloud Solutions',
    description: 'Providing scalable cloud solutions to boost your business efficiency and reduce costs.',
    imageUrl: 'https://via.placeholder.com/100/FFFF00/FFFFFF?text=Cloud',
  },
];

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      {/* Display the image */}
      <img src={service.imageUrl} alt={service.title} className="w-24 h-24 mx-auto" />
      <h3 className="text-xl font-bold text-gray-800 mt-4">{service.title}</h3>
      <p className="text-gray-600 mt-2">{service.description}</p>
    </div>
  );
};

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Наши услуги</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
        Мы предлагаем широкий спектр услуг, которые помогут вашему бизнесу добиться успеха. От веб-разработки до облачных решений - у нас есть все, что вам нужно.
        </p>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы работать с нами?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Позвольте нам вывести ваш бизнес на новый уровень с помощью наших экспертных услуг. Свяжитесь с нами сегодня, чтобы начать работу.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;

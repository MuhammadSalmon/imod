import React, { useEffect, useRef } from 'react';
import img from '../assets/stats.jpg';

// Sample statistics data
const statisticsData = [
  {
    icon: 'https://tgem.su/img/archive/earth.png',
    title: 'Наши клиенты',
    value: 300,
  },
  {
    icon: 'https://tgem.su/img/archive/managment.png',
    title: 'Наши продукты',
    value: 50,
  },
  {
    icon: 'https://tgem.su/img/archive/engineer.png',
    title: 'Число сотрудников',
    value: 500,
  },
];

const Statistics = () => {
  const numberRefs = useRef([]);

  useEffect(() => {
    const animateNumber = (el, endValue) => {
      const duration = 6000; // 3 seconds
      const increment = endValue / (duration / 16); // Increment based on 60fps (16ms per frame)
      let currentValue = 0;

      const updateNumber = () => {
        if (currentValue < endValue) {
          currentValue += increment;
          el.innerText = Math.ceil(currentValue);
          requestAnimationFrame(updateNumber);
        } else {
          el.innerText = `${endValue}+`; // Display the target value with "+" at the end
        }
      };
      updateNumber();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { target } = entry;
            const endValue = parseInt(target.getAttribute('data-stop'), 10);
            animateNumber(target, endValue);
            observer.unobserve(target); // Unobserve once animated
          }
        });
      },
      { threshold: 0.5 }
    );

    numberRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative bg-cover bg-center py-12"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container relative z-10 mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
          <span className="absolute -left-20 right-full border-b-2 border-white top-1/2 transform -translate-y-1/2 w-20"></span>
          Статистика
          <span className="absolute right-0 left-full border-b-2 border-white top-1/2 transform -translate-y-1/2 w-20"></span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {statisticsData.map((stat, index) => (
            <div
              key={index}
              className="w-64 p-6 bg-slate-600 bg-opacity-70 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105"
            >
              <img
                src={stat.icon}
                alt={stat.title}
                className="mx-auto mb-4 w-16 h-16"
              />
              <div className="text-center">
                <p className="text-xl font-medium text-gray-100 mb-2">
                  {stat.title}
                </p>
                <p
                  className="text-3xl font-bold text-white"
                  ref={(el) => (numberRefs.current[index] = el)}
                  data-stop={stat.value}
                >
                  0
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

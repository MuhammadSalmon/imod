import React from 'react';
import img from '../assets/img2.jpg';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-auto lg:h-[70vh] w-[90vw] lg:w-[80vw] mx-auto my-7 border border-gray-700">
      
      {/* Left Side - Text Content */}
      <div
        className="home__about-text w-full lg:w-1/2 bg-cover bg-center p-8 h-full"
        style={{
          backgroundImage: `url('https://tgem.su/img/archive/home-pattern.png')`,
        }}
      >
        <h2 className="title--styled title--styled-left text-xl lg:text-2xl font-bold mb-4 relative pl-10">
          <span className="seperator--left absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gray-200"></span>
          О компании
        </h2>

        <h1 className="main-title home__about-title text-3xl lg:text-4xl font-extrabold mb-6">
          Предприятие по производству <br /> электрооборудования.
        </h1>

        <p className="home__about-desc text-base lg:text-lg text-gray-700 mb-6 whitespace-pre-line">
          31 октября Основатель мира и национального единства — Лидер нации, Президент Республики Таджикистан уважаемый Эмомали Рахмон и Председатель 
          Маджлиси милли Маджлиси Оли Республики Таджикистан, 
          Председатель города Душанбе уважаемый Рустами Эмомали в районе Сино столицы открыли предприятие по производству электрооборудования «Имод» 
          Открытого акционерного общества «ТГЭМ»
        </p>

        <div className="home__about-more">
          <Link to="/history" className="button main-btn bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Подробнее
          </Link>
        </div>
      </div>

      {/* Right Side - Image */}
      <div
        className="w-full lg:w-1/2 h-64 lg:h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
    </div>
  );
};

export default AboutSection;

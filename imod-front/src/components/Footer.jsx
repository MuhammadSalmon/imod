import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-4">
        {/* Company Information */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-xl font-semibold">ИмодЗавод</h2>
          <p className="text-sm mt-2 text-gray-400">
            Производственное предприятие электрооборудования.
          </p>
          <p className="text-sm mt-2 text-gray-400">
            Адрес: г. Душанбе, район Сино, Таджикистан
          </p>
          <p className="text-sm mt-2 text-gray-400">Телефон: +992 123 456 789</p>
          <p className="text-sm mt-2 text-gray-400">Email: info@imodzavod.tj</p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/3 text-center">
          <h2 className="text-xl font-semibold">Быстрые ссылки</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-white transition-colors">
                Главная
              </a>
            </li>
            <li>
              <a href="/history" className="text-gray-400 hover:text-white transition-colors">
                История
              </a>
            </li>
            <li>
              <a href="/products" className="text-gray-400 hover:text-white transition-colors">
                Продукция
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Контакты
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="w-full md:w-1/3 text-center md:text-right">
          <h2 className="text-xl font-semibold">Подписывайтесь на нас</h2>
          <div className="mt-4 flex justify-center md:justify-end space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ИмодЗавод. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoend from '../assets/logoend.png';
import logo from '../assets/logo.png';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    const handleClickOutside = (e) => {
      closeDropdown(e);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isRootPage = location.pathname === '/';

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className={`bg-white shadow-md ${isSticky ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
      {/* Contact Section (Visible only on root page) */}
      {isRootPage && !isSticky && (
        <div className="bg-white border-b">
          <div className="container mx-auto flex items-center justify-between py-4">
            <a href="/" className="flex">
              <img className="h-12 ml-8" src={logo} alt="ТГЕМ лого" />
            </a>
            <div className="hidden lg:flex space-x-10">
              <div className="flex flex-col">
                <span className="font-semibold text-gray-700">Телефон:</span>
                <a href="tel:+9922381111" className="text-blue-600 hover:underline">
                  (+992) 4411116666
                </a>
              </div>
              <div className="border-l-2 border-gray-300 pl-4 flex flex-col">
                <span className="font-semibold text-gray-700">ПН - ПТ:</span>
                <span className="text-black font-medium">08:00 - 18:00</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-700">ул. Н. Хувайдуллоева 377/1</span>
                <a href="/contacts/our_contacts" className="text-blue-600 hover:underline">
                  734060 г. Душанбе
                </a>
              </div>
            </div>
            <a href="/" className="flex">
              <img className="h-24" src={logoend} alt="ТГЕМ лого" />
            </a>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <div className={`container mx-auto px-4 py-4 flex items-center ${isSticky || !isRootPage ? 'justify-between' : 'justify-center'} ${isSticky ? 'pt-5' : ''}`}>
        {/* Logo (Only shows when sticky) */}
        {isSticky && (
          <a href="/" className="flex items-center">
            <img className="h-8" src={logo} alt="IMOD лого" />
          </a>
        )}
        {!isRootPage && !isSticky && (
          <a href="/" className="flex items-center">
            <img className="h-8" src={logo} alt="ТГЕМ лого" />
          </a>
        )}
        <button
          className="md:hidden text-2xl p-3 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <nav className={`hidden md:flex space-x-8 text-lg ${isSticky ? 'ml-20' : ''}`}>
          <Link
            to="/"
            className={`hover:text-blue-500 ${isActive('/') ? 'bg-blue-100 rounded-md px-3 py-1' : ''}`}
          >
            Главное
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              className="hover:text-blue-500 inline-flex items-center"
              onClick={toggleDropdown}
            >
              О Нас
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 w-40 bg-white shadow-lg z-50">
                <ul className="py-2 text-gray-700">
                  <li>
                    <Link to="/news" className={`block px-4 py-2 hover:bg-gray-100 hover:text-blue-500 ${isActive('/news') ? 'bg-blue-100' : ''}`}>
                      Новости
                    </Link>
                  </li>
                  <li>
                    <Link to="/history" className={`block px-4 py-2 hover:bg-gray-100 hover:text-blue-500 ${isActive('/history') ? 'bg-blue-100' : ''}`}>
                      История
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery" className={`block px-4 py-2 hover:bg-gray-100 hover:text-blue-500 ${isActive('/gallery') ? 'bg-blue-100' : ''}`}>
                      Галерия
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link to="/products" className={`hover:text-blue-500 ${isActive('/products') ? 'bg-blue-100 rounded-md px-3 py-1' : ''}`}>
            Продукции
          </Link>
          <Link to="/vacancy" className={`hover:text-blue-500 ${isActive('/vacancy') ? 'bg-blue-100 rounded-md px-3 py-1' : ''}`}>
            Вакасии
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="bg-gray-100 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
            <li>
              <Link to="/" className={`hover:text-blue-500 ${isActive('/') ? 'bg-blue-100 px-3 py-1 rounded-md' : ''}`} onClick={toggleMobileMenu}>
                Главное
              </Link>
            </li>
            <li>
              <Link to="/news" className={`hover:text-blue-500 ${isActive('/news') ? 'bg-blue-100 px-3 py-1 rounded-md' : ''}`} onClick={toggleMobileMenu}>
                Новости
              </Link>
            </li>
            <li>
              <Link to="/history" className={`hover:text-blue-500 ${isActive('/history') ? 'bg-blue-100 px-3 py-1 rounded-md' : ''}`} onClick={toggleMobileMenu}>
                История
              </Link>
            </li>
            <li>
              <Link to="/gallery" className={`hover:text-blue-500 ${isActive('/gallery') ? 'bg-blue-100 px-3 py-1 rounded-md' : ''}`} onClick={toggleMobileMenu}>
                Галерия
              </Link>
            </li>
            <li>
              <Link to="/products" className={`hover:text-blue-500 ${isActive('/products') ? 'bg-blue-100 px-3 py-1 rounded-md' : ''}`} onClick={toggleMobileMenu}>
                Продукции
              </Link>
            </li>
            <li>
              <Link to="/vacancy" className={`hover:text-blue-500 ${isActive('/vacancy') ? 'bg-blue-100 px-3 py-1 rounded-md' : ''}`} onClick={toggleMobileMenu}>
                Вакасии
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

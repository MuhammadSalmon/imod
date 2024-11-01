import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
const Home = lazy(() => import('./pages/Home'));



import ProductPage from './pages/Products';
import NewsPage from './pages/News';
import HistoryPage from './pages/History';
import ProductDetails from './components/ProductDetails';
import ServicePage from './pages/Services';
import VacancyPage from './pages/VacacyPage';
import Gallery from './pages/Gallery';
import NewsDetails from './pages/NewsDetails';

// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/services" element={<ServicePage />} /> 
          <Route path="/vacancy" element={<VacancyPage />} /> 
          <Route path="/gallery" element={<Gallery />} /> 
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VacancyItem from './VacancyItem';
import VacancyDetailsModal from './VacancyDetailsModal'; // Import the modal component
import img3 from "../assets/stats.jpg";
import LoadingSpinner from '../components/Spinner';

const VacancyPage = () => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility
  const [selectedVacancyId, setSelectedVacancyId] = useState(null); // State to hold selected vacancy ID

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/vacancies/');
        setVacancies(response.data);
      } catch (err) {
        setError("Unable to fetch vacancies.");
      } finally {
        setLoading(false);
      }
    };
    fetchVacancies();
  }, []);

  const openModal = (id) => {
    setSelectedVacancyId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVacancyId(null);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <>
      <header className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${img3})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">
          <h1 className="text-5xl font-bold mb-4">Станьте частью ИМОД и развивайте его вместе с нами.</h1>
          <p className="text-lg max-w-2xl">Мы всегда ищем увлеченных людей, которые присоединятся к нашей разнообразной и талантливой команде. Ознакомьтесь с нашими текущими вакансиями и найдите свою следующую возможность.</p>
        </div>
      </header>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Вакансии</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vacancies.map((vacancy) => (
            <VacancyItem key={vacancy.id} vacancy={vacancy} onSelect={openModal} /> // Pass the openModal function
          ))}
        </div>
      </div>

      {/* Modal Component */}
      <VacancyDetailsModal isOpen={modalOpen} onClose={closeModal} vacancyId={selectedVacancyId} />
    </>
  );
};

export default VacancyPage;

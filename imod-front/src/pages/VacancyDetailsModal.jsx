import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingSpinner from '../components/Spinner';

const VacancyDetailsModal = ({ isOpen, onClose, vacancyId }) => {
  const [vacancy, setVacancy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (vacancyId) {
      const fetchVacancy = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/vacancies/${vacancyId}/`);
          setVacancy(response.data);
        } catch (err) {
          setError("Unable to fetch vacancy details.");
        } finally {
          setLoading(false);
        }
      };
      fetchVacancy();
    }
  }, [vacancyId]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <div className="p-6 relative">
          {/* Close button */}
          <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>

          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <div className="text-red-600">{error}</div>
          ) : !vacancy ? (
            <div className="text-gray-700">Vacancy not found</div>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{vacancy.title}</h1>
              {vacancy.image && (
                <div className="mb-4">
                  <img
                    src={vacancy.image}
                    alt={vacancy.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              )}
              <p className="text-gray-700 mb-6">{vacancy.description}</p>
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h2>
                <p>Email: <a href={`mailto:example@example.com`} className="text-blue-600">{`example@example.com`}</a></p>
                <p>Phone: <a href={`tel:988774455`} className="text-blue-600">{`988774455`}</a></p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VacancyDetailsModal;

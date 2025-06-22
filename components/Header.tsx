import React from 'react';
import AcademicCapIcon from './icons/AcademicCapIcon';

const Header: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-md text-center">
      <AcademicCapIcon className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-2">
        COLLOQUIO ORALE 2025
      </h1>
      <p className="text-lg sm:text-xl text-slate-600">
        <strong>"PACCHETTO 20/20"</strong> - Mappa concettuale per un colloquio d'eccellenza
      </p>
    </div>
  );
};

export default Header;
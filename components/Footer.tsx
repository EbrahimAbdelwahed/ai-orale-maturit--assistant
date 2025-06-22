import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center py-10 mt-8">
      <p className="text-sm text-slate-500">
        &copy; {currentYear} Studio Interattivo Colloquio Orale.
      </p>
      <p className="text-xs text-slate-400 mt-1">
        Powered by React, Tailwind CSS & Google Gemini API.
      </p>
    </footer>
  );
};

export default Footer;
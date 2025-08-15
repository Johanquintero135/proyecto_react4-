import { useState } from 'react';

export default function Card() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`max-w-sm mx-auto p-6 shadow-md rounded-lg ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white'
      }`}
    >
      <h2 className="mt-4 text-2xl font-semibold text-center">
        Ramon Guitierres Soler
      </h2>
      <img
        src="https://i.pravatar.cc/150?img=3"
        alt="Perfil"
        className="rounded-full w-32 mx-auto"
      />
      <p className="mt-2 text-center">
        Desarrollador Front-end apasionado por React y el diseño UI/UX.
      </p>

      {/* ✅ Botón centrado debajo del texto */}
      <button
        onClick={toggleDarkMode}
        className={`mt-6 px-4 py-2 rounded block mx-auto ${
          darkMode ? 'bg-blue-500 text-white' : 'bg-gray-600 text-white'
        }`}
      >
        Cambiar Fondo
      </button>
    </div>
  );
}

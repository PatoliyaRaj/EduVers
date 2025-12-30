import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-amber-500 dark:text-amber-400 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-sm hover:shadow-md transform hover:scale-110"
      aria-label="Toggle dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
};

export default DarkModeToggle;

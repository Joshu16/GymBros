import React from 'react';
import { Moon, Sun, Dumbbell } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, darkMode, onToggleDarkMode }) => {
  const getTitle = () => {
    switch (currentView) {
      case 'routines':
        return 'Rutinas';
      case 'workout':
        return 'Entrenamiento';
      case 'history':
        return 'Historial';
      case 'settings':
        return 'Configuración';
      default:
        return 'Gym Bros';
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <Dumbbell className="header-icon" />
          <h1 className="header-title">{getTitle()}</h1>
        </div>
        
        <button 
          className="theme-toggle"
          onClick={onToggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;

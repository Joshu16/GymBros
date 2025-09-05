import React from 'react';
import { Home, Play, History, Settings } from 'lucide-react';

interface NavigationProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
  const navItems = [
    { id: 'routines', label: 'Rutinas', icon: Home },
    { id: 'workout', label: 'Entrenar', icon: Play },
    { id: 'history', label: 'Historial', icon: History },
    { id: 'settings', label: 'Config', icon: Settings },
  ];

  return (
    <nav className="navigation">
      {navItems.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          className={`nav-item ${currentView === id ? 'active' : ''}`}
          onClick={() => onNavigate(id)}
        >
          <Icon size={20} />
          <span className="nav-label">{label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;

import React, { useState } from 'react';
import { useAppData } from './hooks/useAppData';
import { AppSettings } from './types';
import './App.css';

// Import components
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomeView from './components/HomeView';
import RoutinesView from './components/RoutinesView';
import WorkoutView from './components/WorkoutView';
import StatisticsView from './components/StatisticsView';
import HistoryView from './components/HistoryView';
import SettingsView from './components/SettingsView';

type View = 'home' | 'routines' | 'workout' | 'history' | 'settings';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedRoutineId, setSelectedRoutineId] = useState<string | null>(null);
  
  const {
    routines,
    workouts,
    settings,
    updateSettings,
    addRoutine,
    updateRoutine,
    deleteRoutine,
    addWorkout,
    updateWorkout,
    deleteWorkout,
    getWorkoutsByDateRange,
    getWorkoutsByRoutine,
  } = useAppData();

  const toggleDarkMode = () => {
    updateSettings({ ...settings, darkMode: !settings.darkMode });
  };

  const handleStartWorkout = (routineId: string) => {
    setSelectedRoutineId(routineId);
    setCurrentView('workout');
  };

  const handleWorkoutComplete = (workout: any) => {
    addWorkout(workout);
    setCurrentView('home');
    setSelectedRoutineId(null);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomeView
            routines={routines}
            workouts={workouts}
            onStartWorkout={handleStartWorkout}
            onNavigate={(view) => setCurrentView(view as View)}
          />
        );
      case 'routines':
        return (
          <RoutinesView
            routines={routines}
            onAddRoutine={addRoutine}
            onUpdateRoutine={updateRoutine}
            onDeleteRoutine={deleteRoutine}
            onStartWorkout={handleStartWorkout}
          />
        );
      case 'workout':
        return (
          <WorkoutView
            routine={routines.find(r => r.id === selectedRoutineId)}
            onComplete={handleWorkoutComplete}
            onCancel={() => {
              setCurrentView('home');
              setSelectedRoutineId(null);
            }}
            defaultWeightUnit={settings.defaultWeightUnit}
          />
        );
      case 'history':
        return (
          <HistoryView
            workouts={workouts}
            routines={routines}
            onDeleteWorkout={deleteWorkout}
          />
        );
      case 'settings':
        return (
          <SettingsView
            settings={settings}
            onUpdateSettings={updateSettings}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`app ${settings.darkMode ? 'dark' : 'light'}`}>
      <Header 
        currentView={currentView}
        darkMode={settings.darkMode}
        onToggleDarkMode={toggleDarkMode}
      />
      
      <main className="main-content">
        {renderCurrentView()}
      </main>
      
      <Navigation 
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view as View)}
      />
    </div>
  );
}

export default App;

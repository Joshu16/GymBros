import React from 'react';
import { Play, Calendar, Target, TrendingUp, Clock, Dumbbell } from 'lucide-react';
import { Routine, Workout } from '../types';

interface HomeViewProps {
  routines: Routine[];
  workouts: Workout[];
  onStartWorkout: (routineId: string) => void;
  onNavigate: (view: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ 
  routines, 
  workouts, 
  onStartWorkout, 
  onNavigate 
}) => {
  // Calcular estadísticas rápidas
  const totalRoutines = routines.length;
  const totalWorkouts = workouts.length;
  const thisWeekWorkouts = workouts.filter(workout => {
    const workoutDate = new Date(workout.date);
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    return workoutDate >= weekAgo;
  }).length;

  const lastWorkout = workouts.length > 0 
    ? workouts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
    : null;

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return '¡Buenos días!';
    if (hour < 18) return '¡Buenas tardes!';
    return '¡Buenas noches!';
  };

  const getMotivationalMessage = () => {
    const messages = [
      '¡Hora de entrenar! 💪',
      'Cada repetición te acerca a tu meta',
      'La constancia es la clave del éxito',
      '¡Tu cuerpo te lo agradecerá!',
      'Hoy es un gran día para entrenar',
      '¡Vamos por más!'
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <div className="home-view">
      {/* Header de bienvenida */}
      <div className="welcome-section">
        <div className="welcome-content">
          <h1 className="welcome-title">{getGreeting()}</h1>
          <p className="welcome-subtitle">{getMotivationalMessage()}</p>
        </div>
        <div className="welcome-icon">
          <Dumbbell size={48} />
        </div>
      </div>

      {/* Estadísticas rápidas */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Target size={24} />
          </div>
          <div className="stat-content">
            <h3>{totalRoutines}</h3>
            <p>Rutinas</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Play size={24} />
          </div>
          <div className="stat-content">
            <h3>{totalWorkouts}</h3>
            <p>Entrenamientos</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Calendar size={24} />
          </div>
          <div className="stat-content">
            <h3>{thisWeekWorkouts}</h3>
            <p>Esta semana</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <h3>{lastWorkout ? 'Activo' : 'Inactivo'}</h3>
            <p>Estado</p>
          </div>
        </div>
      </div>

      {/* Acciones rápidas */}
      <div className="quick-actions">
        <h2>Acciones rápidas</h2>
        <div className="action-buttons">
          <button 
            className="action-btn primary"
            onClick={() => onNavigate('routines')}
          >
            <Target size={20} />
            <span>Ver Rutinas</span>
          </button>
          
          <button 
            className="action-btn secondary"
            onClick={() => onNavigate('statistics')}
          >
            <TrendingUp size={20} />
            <span>Estadísticas</span>
          </button>
          
          <button 
            className="action-btn secondary"
            onClick={() => onNavigate('history')}
          >
            <Clock size={20} />
            <span>Historial</span>
          </button>
        </div>
      </div>

      {/* Último entrenamiento */}
      {lastWorkout && (
        <div className="last-workout">
          <h2>Último entrenamiento</h2>
          <div className="workout-card">
            <div className="workout-info">
              <h3>{lastWorkout.routine.name}</h3>
              <p>{new Date(lastWorkout.date).toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
              <div className="workout-stats">
                <span>{lastWorkout.exercises.length} ejercicios</span>
                {lastWorkout.duration && (
                  <span>{lastWorkout.duration} min</span>
                )}
              </div>
            </div>
            <button 
              className="repeat-btn"
              onClick={() => onStartWorkout(lastWorkout.routineId)}
            >
              <Play size={16} />
              Repetir
            </button>
          </div>
        </div>
      )}

      {/* Rutinas recientes */}
      {routines.length > 0 && (
        <div className="recent-routines">
          <h2>Rutinas recientes</h2>
          <div className="routines-list">
            {routines.slice(0, 3).map(routine => (
              <div key={routine.id} className="routine-card">
                <div className="routine-info">
                  <h3>{routine.name}</h3>
                  <p>{routine.exercises.length} ejercicios</p>
                </div>
                <button 
                  className="start-btn"
                  onClick={() => onStartWorkout(routine.id)}
                >
                  <Play size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeView;

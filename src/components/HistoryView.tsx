import React, { useState } from 'react';
import { Calendar, Download, Copy, Trash2, Eye, EyeOff } from 'lucide-react';
import { Workout, Routine } from '../types';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface HistoryViewProps {
  workouts: Workout[];
  routines: Routine[];
  onDeleteWorkout: (id: string) => void;
}

const HistoryView: React.FC<HistoryViewProps> = ({
  workouts,
  routines,
  onDeleteWorkout,
}) => {
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const formatWorkoutText = (workout: Workout): string => {
    const routine = routines.find(r => r.id === workout.routineId);
    const date = format(new Date(workout.date), 'dd/MM/yyyy HH:mm', { locale: es });
    
    let text = `🏋️ Entrenamiento: ${routine?.name || 'Rutina desconocida'}\n`;
    text += `📅 Fecha: ${date}\n`;
    if (workout.duration) {
      text += `⏱️ Duración: ${workout.duration} minutos\n`;
    }
    text += `\n📋 Ejercicios:\n\n`;

    workout.exercises.forEach((exercise, index) => {
      text += `${index + 1}. ${exercise.exercise.name} (${exercise.weightUnit})\n`;
      exercise.sets.forEach((set, setIndex) => {
        text += `   Set ${setIndex + 1}: ${set.weight}${exercise.weightUnit} x ${set.reps} reps @ RIR ${set.rir}`;
        if (set.notes) {
          text += ` - ${set.notes}`;
        }
        text += '\n';
      });
      text += '\n';
    });

    if (workout.notes) {
      text += `📝 Notas: ${workout.notes}\n`;
    }

    return text;
  };

  const copyWorkoutToClipboard = async (workout: Workout) => {
    try {
      const text = formatWorkoutText(workout);
      await navigator.clipboard.writeText(text);
      alert('Entrenamiento copiado al portapapeles');
    } catch (err) {
      console.error('Error copying to clipboard:', err);
      alert('Error al copiar al portapapeles');
    }
  };

  const downloadWorkout = (workout: Workout) => {
    const text = formatWorkoutText(workout);
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `entrenamiento-${format(new Date(workout.date), 'yyyy-MM-dd')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const deleteWorkout = (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este entrenamiento?')) {
      onDeleteWorkout(id);
    }
  };

  const groupedWorkouts = workouts.reduce((acc, workout) => {
    const date = format(new Date(workout.date), 'yyyy-MM-dd');
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(workout);
    return acc;
  }, {} as Record<string, Workout[]>);

  const sortedDates = Object.keys(groupedWorkouts).sort((a, b) => 
    new Date(b).getTime() - new Date(a).getTime()
  );

  return (
    <div className="history-view">
      <div className="view-header">
        <h2>Historial de Entrenamientos</h2>
        <div className="workout-stats">
          <span className="stat">
            {workouts.length} entrenamiento{workouts.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {workouts.length === 0 ? (
        <div className="empty-state">
          <Calendar size={48} className="empty-icon" />
          <h3>No hay entrenamientos registrados</h3>
          <p>Comienza un entrenamiento para ver tu historial aquí</p>
        </div>
      ) : (
        <div className="workouts-timeline">
          {sortedDates.map((date) => (
            <div key={date} className="workout-day">
              <h3 className="day-header">
                {format(new Date(date), 'EEEE, dd MMMM yyyy', { locale: es })}
              </h3>
              
              <div className="day-workouts">
                {groupedWorkouts[date].map((workout) => {
                  const routine = routines.find(r => r.id === workout.routineId);
                  return (
                    <div key={workout.id} className="workout-card">
                      <div className="workout-card-header">
                        <div className="workout-info">
                          <h4>{routine?.name || 'Rutina desconocida'}</h4>
                          <span className="workout-time">
                            {format(new Date(workout.date), 'HH:mm')}
                          </span>
                        </div>
                        
                        <div className="workout-actions">
                          <button
                            className="btn-icon"
                            onClick={() => {
                              setSelectedWorkout(workout);
                              setShowDetails(true);
                            }}
                            title="Ver detalles"
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            className="btn-icon"
                            onClick={() => copyWorkoutToClipboard(workout)}
                            title="Copiar"
                          >
                            <Copy size={16} />
                          </button>
                          <button
                            className="btn-icon"
                            onClick={() => downloadWorkout(workout)}
                            title="Descargar"
                          >
                            <Download size={16} />
                          </button>
                          <button
                            className="btn-icon btn-danger"
                            onClick={() => deleteWorkout(workout.id)}
                            title="Eliminar"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="workout-summary">
                        <span className="summary-item">
                          {workout.exercises.length} ejercicio{workout.exercises.length !== 1 ? 's' : ''}
                        </span>
                        <span className="summary-item">
                          {workout.exercises.reduce((total, ex) => total + ex.sets.length, 0)} series
                        </span>
                        {workout.duration && (
                          <span className="summary-item">
                            {workout.duration} min
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {showDetails && selectedWorkout && (
        <div className="modal-overlay">
          <div className="modal workout-details">
            <div className="modal-header">
              <h3>Detalles del Entrenamiento</h3>
              <button 
                className="btn-icon" 
                onClick={() => setShowDetails(false)}
              >
                <EyeOff size={20} />
              </button>
            </div>
            
            <div className="modal-content">
              <div className="workout-details-content">
                <pre className="workout-text">
                  {formatWorkoutText(selectedWorkout)}
                </pre>
              </div>
            </div>
            
            <div className="modal-footer">
              <button 
                className="btn btn-secondary"
                onClick={() => copyWorkoutToClipboard(selectedWorkout)}
              >
                <Copy size={16} />
                Copiar
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => downloadWorkout(selectedWorkout)}
              >
                <Download size={16} />
                Descargar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryView;

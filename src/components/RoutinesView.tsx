import React, { useState } from 'react';
import { Plus, Play, Edit, Trash2, Dumbbell } from 'lucide-react';
import { Routine } from '../types';
import RoutineForm from './RoutineForm';

interface RoutinesViewProps {
  routines: Routine[];
  onAddRoutine: (routine: Routine) => void;
  onUpdateRoutine: (id: string, routine: Routine) => void;
  onDeleteRoutine: (id: string) => void;
  onStartWorkout: (routineId: string) => void;
}

const RoutinesView: React.FC<RoutinesViewProps> = ({
  routines,
  onAddRoutine,
  onUpdateRoutine,
  onDeleteRoutine,
  onStartWorkout,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [editingRoutine, setEditingRoutine] = useState<Routine | null>(null);

  const handleAddRoutine = (routine: Routine) => {
    onAddRoutine(routine);
    setShowForm(false);
  };

  const handleUpdateRoutine = (routine: Routine) => {
    onUpdateRoutine(routine.id, routine);
    setEditingRoutine(null);
  };

  const handleEdit = (routine: Routine) => {
    setEditingRoutine(routine);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta rutina?')) {
      onDeleteRoutine(id);
    }
  };

  return (
    <div className="routines-view">
      <div className="view-header">
        <h2>Mis Rutinas</h2>
        <button 
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
        >
          <Plus size={20} />
          Nueva Rutina
        </button>
      </div>

      {showForm && (
        <RoutineForm
          routine={editingRoutine}
          onSave={editingRoutine ? handleUpdateRoutine : handleAddRoutine}
          onCancel={() => {
            setShowForm(false);
            setEditingRoutine(null);
          }}
        />
      )}

      <div className="routines-grid">
        {routines.length === 0 ? (
          <div className="empty-state">
            <Dumbbell size={48} className="empty-icon" />
            <h3>No tienes rutinas aún</h3>
            <p>Crea tu primera rutina para comenzar a entrenar</p>
            <button 
              className="btn btn-primary"
              onClick={() => setShowForm(true)}
            >
              <Plus size={20} />
              Crear Rutina
            </button>
          </div>
        ) : (
          routines.map((routine) => (
            <div key={routine.id} className="routine-card">
              <div className="routine-header">
                <h3 className="routine-name">{routine.name}</h3>
                <div className="routine-actions">
                  <button
                    className="btn-icon"
                    onClick={() => handleEdit(routine)}
                    title="Editar rutina"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    className="btn-icon btn-danger"
                    onClick={() => handleDelete(routine.id)}
                    title="Eliminar rutina"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              
              {routine.description && (
                <p className="routine-description">{routine.description}</p>
              )}
              
              <div className="routine-stats">
                <span className="stat">
                  {routine.exercises.length} ejercicio{routine.exercises.length !== 1 ? 's' : ''}
                </span>
                <span className="stat">
                  {routine.exercises.reduce((total, ex) => total + ex.sets.length, 0)} series
                </span>
              </div>
              
              <div className="routine-exercises">
                {routine.exercises.slice(0, 3).map((exercise) => (
                  <div key={exercise.id} className="exercise-preview">
                    <span className="exercise-name">{exercise.exercise.name}</span>
                    <span className="exercise-sets">{exercise.sets.length} series</span>
                  </div>
                ))}
                {routine.exercises.length > 3 && (
                  <div className="exercise-preview">
                    <span className="exercise-name">
                      +{routine.exercises.length - 3} más...
                    </span>
                  </div>
                )}
              </div>
              
              <button
                className="btn btn-primary btn-full"
                onClick={() => onStartWorkout(routine.id)}
              >
                <Play size={20} />
                Comenzar Entrenamiento
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RoutinesView;

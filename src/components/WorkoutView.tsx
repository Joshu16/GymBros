import React, { useState, useEffect } from 'react';
import { Play, Pause, Square, Plus, Trash2, Check, X } from 'lucide-react';
import { Routine, Workout, WorkoutExercise, ExerciseSet, WeightUnit } from '../types';

interface WorkoutViewProps {
  routine: Routine | undefined;
  onComplete: (workout: Workout) => void;
  onCancel: () => void;
  defaultWeightUnit: WeightUnit;
}

const WorkoutView: React.FC<WorkoutViewProps> = ({
  routine,
  onComplete,
  onCancel,
  defaultWeightUnit,
}) => {
  const [workoutExercises, setWorkoutExercises] = useState<WorkoutExercise[]>([]);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);
  const [workoutStartTime, setWorkoutStartTime] = useState<Date | null>(null);
  const [workoutNotes, setWorkoutNotes] = useState('');

  useEffect(() => {
    if (routine) {
      // Clone the routine exercises for the workout
      const clonedExercises = routine.exercises.map(ex => ({
        ...ex,
        sets: ex.sets.map(set => ({ ...set }))
      }));
      setWorkoutExercises(clonedExercises);
    }
  }, [routine]);

  const startWorkout = () => {
    setIsWorkoutActive(true);
    setWorkoutStartTime(new Date());
  };

  const completeWorkout = () => {
    if (!routine || !workoutStartTime) return;

    const workout: Workout = {
      id: Date.now().toString(),
      routineId: routine.id,
      routine,
      exercises: workoutExercises,
      date: workoutStartTime,
      duration: Math.floor((Date.now() - workoutStartTime.getTime()) / 60000), // in minutes
      notes: workoutNotes
    };

    onComplete(workout);
  };

  const addSet = (exerciseId: string) => {
    setWorkoutExercises(workoutExercises.map(ex => 
      ex.id === exerciseId 
        ? {
            ...ex,
            sets: [...ex.sets, {
              id: Date.now().toString(),
              weight: 0,
              reps: 0,
              rir: 0,
              notes: ''
            }]
          }
        : ex
    ));
  };

  const removeSet = (exerciseId: string, setId: string) => {
    setWorkoutExercises(workoutExercises.map(ex => 
      ex.id === exerciseId 
        ? {
            ...ex,
            sets: ex.sets.filter(set => set.id !== setId)
          }
        : ex
    ));
  };

  const updateSet = (exerciseId: string, setId: string, field: keyof ExerciseSet, value: any) => {
    setWorkoutExercises(workoutExercises.map(ex => 
      ex.id === exerciseId 
        ? {
            ...ex,
            sets: ex.sets.map(set => 
              set.id === setId ? { ...set, [field]: value } : set
            )
          }
        : ex
    ));
  };

  const updateWeightUnit = (exerciseId: string, unit: WeightUnit) => {
    setWorkoutExercises(workoutExercises.map(ex => 
      ex.id === exerciseId 
        ? { ...ex, weightUnit: unit }
        : ex
    ));
  };

  const nextExercise = () => {
    if (currentExerciseIndex < workoutExercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  };

  const prevExercise = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
    }
  };

  if (!routine) {
    return (
      <div className="workout-view">
        <div className="error-state">
          <h3>Rutina no encontrada</h3>
          <button className="btn btn-primary" onClick={onCancel}>
            Volver a Rutinas
          </button>
        </div>
      </div>
    );
  }

  const currentExercise = workoutExercises[currentExerciseIndex];

  return (
    <div className="workout-view">
      <div className="workout-header">
        <div className="workout-info">
          <h2>{routine.name}</h2>
          <div className="workout-progress">
            <span>Ejercicio {currentExerciseIndex + 1} de {workoutExercises.length}</span>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${((currentExerciseIndex + 1) / workoutExercises.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
        
        {!isWorkoutActive ? (
          <button className="btn btn-primary" onClick={startWorkout}>
            <Play size={20} />
            Comenzar Entrenamiento
          </button>
        ) : (
          <div className="workout-controls">
            <button className="btn btn-secondary" onClick={onCancel}>
              <X size={20} />
              Cancelar
            </button>
            <button className="btn btn-success" onClick={completeWorkout}>
              <Check size={20} />
              Completar
            </button>
          </div>
        )}
      </div>

      {isWorkoutActive && (
        <div className="workout-content">
          <div className="exercise-navigation">
            <button 
              className="btn btn-secondary"
              onClick={prevExercise}
              disabled={currentExerciseIndex === 0}
            >
              Anterior
            </button>
            <button 
              className="btn btn-secondary"
              onClick={nextExercise}
              disabled={currentExerciseIndex === workoutExercises.length - 1}
            >
              Siguiente
            </button>
          </div>

          <div className="current-exercise">
            <div className="exercise-header">
              <h3>{currentExercise.exercise.name}</h3>
              <select
                value={currentExercise.weightUnit}
                onChange={(e) => updateWeightUnit(currentExercise.id, e.target.value as WeightUnit)}
              >
                <option value="kg">kg</option>
                <option value="lbs">lbs</option>
              </select>
            </div>

            <div className="sets-container">
              {currentExercise.sets.map((set, index) => (
                <div key={set.id} className="set-row">
                  <span className="set-number">Set {index + 1}</span>
                  
                  <div className="set-inputs">
                    <div className="input-group">
                      <label>Peso ({currentExercise.weightUnit})</label>
                      <input
                        type="number"
                        value={set.weight || ''}
                        onChange={(e) => updateSet(currentExercise.id, set.id, 'weight', parseFloat(e.target.value) || 0)}
                        placeholder="0"
                      />
                    </div>
                    
                    <div className="input-group">
                      <label>Reps</label>
                      <input
                        type="number"
                        value={set.reps || ''}
                        onChange={(e) => updateSet(currentExercise.id, set.id, 'reps', parseInt(e.target.value) || 0)}
                        placeholder="0"
                      />
                    </div>
                    
                    <div className="input-group">
                      <label>RIR</label>
                      <input
                        type="number"
                        value={set.rir || ''}
                        onChange={(e) => updateSet(currentExercise.id, set.id, 'rir', parseInt(e.target.value) || 0)}
                        placeholder="0"
                      />
                    </div>
                    
                    <div className="input-group">
                      <label>Notas</label>
                      <input
                        type="text"
                        value={set.notes || ''}
                        onChange={(e) => updateSet(currentExercise.id, set.id, 'notes', e.target.value)}
                        placeholder="Notas..."
                      />
                    </div>
                  </div>
                  
                  <button
                    className="btn-icon btn-danger"
                    onClick={() => removeSet(currentExercise.id, set.id)}
                    disabled={currentExercise.sets.length === 1}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              
              <button
                className="btn btn-secondary btn-full"
                onClick={() => addSet(currentExercise.id)}
              >
                <Plus size={16} />
                Agregar Serie
              </button>
            </div>
          </div>

          <div className="workout-notes">
            <label htmlFor="workout-notes">Notas del entrenamiento</label>
            <textarea
              id="workout-notes"
              value={workoutNotes}
              onChange={(e) => setWorkoutNotes(e.target.value)}
              placeholder="Notas generales del entrenamiento..."
              rows={3}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutView;

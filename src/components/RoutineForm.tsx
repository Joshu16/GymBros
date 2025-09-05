import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, Save } from 'lucide-react';
import { Routine, WorkoutExercise, Exercise, ExerciseSet, WeightUnit } from '../types';
import { exercises } from '../data/exercises';

interface RoutineFormProps {
  routine?: Routine | null;
  onSave: (routine: Routine) => void;
  onCancel: () => void;
}

const RoutineForm: React.FC<RoutineFormProps> = ({ routine, onSave, onCancel }) => {
  const [name, setName] = useState(routine?.name || '');
  const [description, setDescription] = useState(routine?.description || '');
  const [routineExercises, setRoutineExercises] = useState<WorkoutExercise[]>(
    routine?.exercises || []
  );
  const [showExerciseSelector, setShowExerciseSelector] = useState(false);

  const handleAddExercise = (exercise: Exercise) => {
    const newWorkoutExercise: WorkoutExercise = {
      id: Date.now().toString(),
      exerciseId: exercise.id,
      exercise,
      sets: [{
        id: Date.now().toString(),
        weight: 0,
        reps: 0,
        rir: 0,
        notes: ''
      }],
      weightUnit: 'kg'
    };
    
    setRoutineExercises([...routineExercises, newWorkoutExercise]);
    setShowExerciseSelector(false);
  };

  const handleRemoveExercise = (exerciseId: string) => {
    setRoutineExercises(routineExercises.filter(ex => ex.id !== exerciseId));
  };

  const handleAddSet = (exerciseId: string) => {
    setRoutineExercises(routineExercises.map(ex => 
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

  const handleRemoveSet = (exerciseId: string, setId: string) => {
    setRoutineExercises(routineExercises.map(ex => 
      ex.id === exerciseId 
        ? {
            ...ex,
            sets: ex.sets.filter(set => set.id !== setId)
          }
        : ex
    ));
  };

  const handleSetChange = (exerciseId: string, setId: string, field: keyof ExerciseSet, value: any) => {
    setRoutineExercises(routineExercises.map(ex => 
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

  const handleWeightUnitChange = (exerciseId: string, unit: WeightUnit) => {
    setRoutineExercises(routineExercises.map(ex => 
      ex.id === exerciseId 
        ? { ...ex, weightUnit: unit }
        : ex
    ));
  };

  const handleSave = () => {
    if (!name.trim()) {
      alert('Por favor ingresa un nombre para la rutina');
      return;
    }

    if (routineExercises.length === 0) {
      alert('Por favor agrega al menos un ejercicio');
      return;
    }

    const newRoutine: Routine = {
      id: routine?.id || Date.now().toString(),
      name: name.trim(),
      description: description.trim(),
      exercises: routineExercises,
      createdAt: routine?.createdAt || new Date(),
      updatedAt: new Date()
    };

    onSave(newRoutine);
  };

  const groupedExercises = exercises.reduce((acc, exercise) => {
    if (!acc[exercise.category]) {
      acc[exercise.category] = [];
    }
    acc[exercise.category].push(exercise);
    return acc;
  }, {} as Record<string, Exercise[]>);

  return (
    <div className="modal-overlay">
      <div className="modal routine-form">
        <div className="modal-header">
          <h3>{routine ? 'Editar Rutina' : 'Nueva Rutina'}</h3>
          <button className="btn-icon" onClick={onCancel}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-content">
          <div className="form-group">
            <label htmlFor="routine-name">Nombre de la rutina</label>
            <input
              id="routine-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: Push Day, Pull Day..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="routine-description">Descripción (opcional)</label>
            <textarea
              id="routine-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe tu rutina..."
              rows={3}
            />
          </div>

          <div className="exercises-section">
            <div className="section-header">
              <h4>Ejercicios</h4>
              <button 
                className="btn btn-secondary"
                onClick={() => setShowExerciseSelector(true)}
              >
                <Plus size={16} />
                Agregar Ejercicio
              </button>
            </div>

            {routineExercises.map((workoutExercise) => (
              <div key={workoutExercise.id} className="exercise-item">
                <div className="exercise-header">
                  <h5>{workoutExercise.exercise.name}</h5>
                  <div className="exercise-actions">
                    <select
                      value={workoutExercise.weightUnit}
                      onChange={(e) => handleWeightUnitChange(workoutExercise.id, e.target.value as WeightUnit)}
                    >
                      <option value="kg">kg</option>
                      <option value="lbs">lbs</option>
                    </select>
                    <button
                      className="btn-icon btn-danger"
                      onClick={() => handleRemoveExercise(workoutExercise.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="sets-list">
                  {workoutExercise.sets.map((set, index) => (
                    <div key={set.id} className="set-item">
                      <span className="set-number">Set {index + 1}</span>
                      <input
                        type="number"
                        placeholder="Peso"
                        value={set.weight || ''}
                        onChange={(e) => handleSetChange(workoutExercise.id, set.id, 'weight', parseFloat(e.target.value) || 0)}
                      />
                      <input
                        type="number"
                        placeholder="Reps"
                        value={set.reps || ''}
                        onChange={(e) => handleSetChange(workoutExercise.id, set.id, 'reps', parseInt(e.target.value) || 0)}
                      />
                      <input
                        type="number"
                        placeholder="RIR"
                        value={set.rir || ''}
                        onChange={(e) => handleSetChange(workoutExercise.id, set.id, 'rir', parseInt(e.target.value) || 0)}
                      />
                      <input
                        type="text"
                        placeholder="Notas"
                        value={set.notes || ''}
                        onChange={(e) => handleSetChange(workoutExercise.id, set.id, 'notes', e.target.value)}
                      />
                      <button
                        className="btn-icon btn-danger"
                        onClick={() => handleRemoveSet(workoutExercise.id, set.id)}
                        disabled={workoutExercise.sets.length === 1}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                  
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => handleAddSet(workoutExercise.id)}
                  >
                    <Plus size={14} />
                    Agregar Serie
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onCancel}>
            Cancelar
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <Save size={16} />
            {routine ? 'Actualizar' : 'Crear'} Rutina
          </button>
        </div>
      </div>

      {showExerciseSelector && (
        <div className="modal-overlay">
          <div className="modal exercise-selector">
            <div className="modal-header">
              <h3>Seleccionar Ejercicio</h3>
              <button 
                className="btn-icon" 
                onClick={() => setShowExerciseSelector(false)}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-content">
              {Object.entries(groupedExercises).map(([category, categoryExercises]) => (
                <div key={category} className="exercise-category">
                  <h4>{category}</h4>
                  <div className="exercise-list">
                    {categoryExercises.map((exercise) => (
                      <button
                        key={exercise.id}
                        className="exercise-option"
                        onClick={() => handleAddExercise(exercise)}
                      >
                        <span className="exercise-name">{exercise.name}</span>
                        <span className="exercise-equipment">{exercise.equipment}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoutineForm;

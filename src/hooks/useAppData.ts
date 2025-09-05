import { useState, useEffect } from 'react';
import { Routine, Workout, AppSettings } from '../types';
import { storage } from '../utils/storage';

export function useAppData() {
  const [routines, setRoutines] = useState<Routine[]>([]);
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [settings, setSettings] = useState<AppSettings>({ darkMode: false, defaultWeightUnit: 'kg' });

  // Load data from localStorage on mount
  useEffect(() => {
    setRoutines(storage.getRoutines());
    setWorkouts(storage.getWorkouts());
    setSettings(storage.getSettings());
  }, []);

  // Save routines to localStorage whenever routines change
  const updateRoutines = (newRoutines: Routine[]) => {
    setRoutines(newRoutines);
    storage.saveRoutines(newRoutines);
  };

  // Save workouts to localStorage whenever workouts change
  const updateWorkouts = (newWorkouts: Workout[]) => {
    setWorkouts(newWorkouts);
    storage.saveWorkouts(newWorkouts);
  };

  // Save settings to localStorage whenever settings change
  const updateSettings = (newSettings: AppSettings) => {
    setSettings(newSettings);
    storage.saveSettings(newSettings);
  };

  // Add a new routine
  const addRoutine = (routine: Routine) => {
    const newRoutines = [...routines, routine];
    updateRoutines(newRoutines);
  };

  // Update an existing routine
  const updateRoutine = (id: string, updatedRoutine: Routine) => {
    const newRoutines = routines.map(routine => 
      routine.id === id ? updatedRoutine : routine
    );
    updateRoutines(newRoutines);
  };

  // Delete a routine
  const deleteRoutine = (id: string) => {
    const newRoutines = routines.filter(routine => routine.id !== id);
    updateRoutines(newRoutines);
  };

  // Add a new workout
  const addWorkout = (workout: Workout) => {
    const newWorkouts = [...workouts, workout];
    updateWorkouts(newWorkouts);
  };

  // Update an existing workout
  const updateWorkout = (id: string, updatedWorkout: Workout) => {
    const newWorkouts = workouts.map(workout => 
      workout.id === id ? updatedWorkout : workout
    );
    updateWorkouts(newWorkouts);
  };

  // Delete a workout
  const deleteWorkout = (id: string) => {
    const newWorkouts = workouts.filter(workout => workout.id !== id);
    updateWorkouts(newWorkouts);
  };

  // Get workouts by date range
  const getWorkoutsByDateRange = (startDate: Date, endDate: Date) => {
    return workouts.filter(workout => {
      const workoutDate = new Date(workout.date);
      return workoutDate >= startDate && workoutDate <= endDate;
    });
  };

  // Get workouts by routine
  const getWorkoutsByRoutine = (routineId: string) => {
    return workouts.filter(workout => workout.routineId === routineId);
  };

  return {
    routines,
    workouts,
    settings,
    updateRoutines,
    updateWorkouts,
    updateSettings,
    addRoutine,
    updateRoutine,
    deleteRoutine,
    addWorkout,
    updateWorkout,
    deleteWorkout,
    getWorkoutsByDateRange,
    getWorkoutsByRoutine,
  };
}

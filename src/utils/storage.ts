import { Routine, Workout, AppSettings } from '../types';

const STORAGE_KEYS = {
  ROUTINES: 'gym-bros-routines',
  WORKOUTS: 'gym-bros-workouts',
  SETTINGS: 'gym-bros-settings',
} as const;

export const storage = {
  // Routines
  getRoutines: (): Routine[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ROUTINES);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveRoutines: (routines: Routine[]): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.ROUTINES, JSON.stringify(routines));
    } catch (error) {
      console.error('Failed to save routines:', error);
    }
  },

  // Workouts
  getWorkouts: (): Workout[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.WORKOUTS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveWorkouts: (workouts: Workout[]): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.WORKOUTS, JSON.stringify(workouts));
    } catch (error) {
      console.error('Failed to save workouts:', error);
    }
  },

  // Settings
  getSettings: (): AppSettings => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return data ? JSON.parse(data) : { darkMode: false, defaultWeightUnit: 'kg' };
    } catch {
      return { darkMode: false, defaultWeightUnit: 'kg' };
    }
  },

  saveSettings: (settings: AppSettings): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  },

  // Clear all data
  clearAll: (): void => {
    try {
      localStorage.removeItem(STORAGE_KEYS.ROUTINES);
      localStorage.removeItem(STORAGE_KEYS.WORKOUTS);
      localStorage.removeItem(STORAGE_KEYS.SETTINGS);
    } catch (error) {
      console.error('Failed to clear data:', error);
    }
  },
};

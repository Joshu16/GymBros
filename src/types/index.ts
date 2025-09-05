export interface Exercise {
  id: string;
  name: string;
  category: string;
  muscleGroups: string[];
  equipment?: string;
}

export interface ExerciseSet {
  id: string;
  weight: number;
  reps: number;
  rir: number; // Reps in Reserve
  notes?: string;
}

export interface WorkoutExercise {
  id: string;
  exerciseId: string;
  exercise: Exercise;
  sets: ExerciseSet[];
  weightUnit: 'kg' | 'lbs';
}

export interface Routine {
  id: string;
  name: string;
  description?: string;
  exercises: WorkoutExercise[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Workout {
  id: string;
  routineId: string;
  routine: Routine;
  exercises: WorkoutExercise[];
  date: Date;
  duration?: number; // in minutes
  notes?: string;
}

export interface AppSettings {
  darkMode: boolean;
  defaultWeightUnit: 'kg' | 'lbs';
}

export type WeightUnit = 'kg' | 'lbs';

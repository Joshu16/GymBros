import { Exercise } from '../types';

export const exercises: Exercise[] = [
  // Chest
  { id: 'bench-press', name: 'Bench Press', category: 'Chest', muscleGroups: ['Chest', 'Shoulders', 'Triceps'], equipment: 'Barbell' },
  { id: 'incline-bench-press', name: 'Incline Bench Press', category: 'Chest', muscleGroups: ['Upper Chest', 'Shoulders', 'Triceps'], equipment: 'Barbell' },
  { id: 'decline-bench-press', name: 'Decline Bench Press', category: 'Chest', muscleGroups: ['Lower Chest', 'Shoulders', 'Triceps'], equipment: 'Barbell' },
  { id: 'dumbbell-press', name: 'Dumbbell Press', category: 'Chest', muscleGroups: ['Chest', 'Shoulders', 'Triceps'], equipment: 'Dumbbells' },
  { id: 'incline-dumbbell-press', name: 'Incline Dumbbell Press', category: 'Chest', muscleGroups: ['Upper Chest', 'Shoulders', 'Triceps'], equipment: 'Dumbbells' },
  { id: 'dumbbell-flyes', name: 'Dumbbell Flyes', category: 'Chest', muscleGroups: ['Chest'], equipment: 'Dumbbells' },
  { id: 'incline-flyes', name: 'Incline Flyes', category: 'Chest', muscleGroups: ['Upper Chest'], equipment: 'Dumbbells' },
  { id: 'push-ups', name: 'Push-ups', category: 'Chest', muscleGroups: ['Chest', 'Shoulders', 'Triceps'], equipment: 'Bodyweight' },
  { id: 'dips', name: 'Dips', category: 'Chest', muscleGroups: ['Chest', 'Triceps', 'Shoulders'], equipment: 'Bodyweight' },
  { id: 'cable-flyes', name: 'Cable Flyes', category: 'Chest', muscleGroups: ['Chest'], equipment: 'Cable' },

  // Back
  { id: 'deadlift', name: 'Deadlift', category: 'Back', muscleGroups: ['Back', 'Glutes', 'Hamstrings'], equipment: 'Barbell' },
  { id: 'bent-over-row', name: 'Bent Over Row', category: 'Back', muscleGroups: ['Back', 'Biceps'], equipment: 'Barbell' },
  { id: 'pull-ups', name: 'Pull-ups', category: 'Back', muscleGroups: ['Back', 'Biceps'], equipment: 'Bodyweight' },
  { id: 'lat-pulldown', name: 'Lat Pulldown', category: 'Back', muscleGroups: ['Back', 'Biceps'], equipment: 'Cable' },
  { id: 'seated-row', name: 'Seated Row', category: 'Back', muscleGroups: ['Back', 'Biceps'], equipment: 'Cable' },
  { id: 't-bar-row', name: 'T-Bar Row', category: 'Back', muscleGroups: ['Back', 'Biceps'], equipment: 'Barbell' },
  { id: 'one-arm-dumbbell-row', name: 'One-Arm Dumbbell Row', category: 'Back', muscleGroups: ['Back', 'Biceps'], equipment: 'Dumbbells' },
  { id: 'face-pulls', name: 'Face Pulls', category: 'Back', muscleGroups: ['Rear Delts', 'Upper Back'], equipment: 'Cable' },
  { id: 'shrugs', name: 'Shrugs', category: 'Back', muscleGroups: ['Traps'], equipment: 'Barbell' },
  { id: 'reverse-flyes', name: 'Reverse Flyes', category: 'Back', muscleGroups: ['Rear Delts'], equipment: 'Dumbbells' },

  // Shoulders
  { id: 'overhead-press', name: 'Overhead Press', category: 'Shoulders', muscleGroups: ['Shoulders', 'Triceps'], equipment: 'Barbell' },
  { id: 'dumbbell-press', name: 'Dumbbell Press', category: 'Shoulders', muscleGroups: ['Shoulders', 'Triceps'], equipment: 'Dumbbells' },
  { id: 'lateral-raises', name: 'Lateral Raises', category: 'Shoulders', muscleGroups: ['Side Delts'], equipment: 'Dumbbells' },
  { id: 'front-raises', name: 'Front Raises', category: 'Shoulders', muscleGroups: ['Front Delts'], equipment: 'Dumbbells' },
  { id: 'rear-delt-flyes', name: 'Rear Delt Flyes', category: 'Shoulders', muscleGroups: ['Rear Delts'], equipment: 'Dumbbells' },
  { id: 'arnold-press', name: 'Arnold Press', category: 'Shoulders', muscleGroups: ['Shoulders', 'Triceps'], equipment: 'Dumbbells' },
  { id: 'upright-row', name: 'Upright Row', category: 'Shoulders', muscleGroups: ['Shoulders', 'Traps'], equipment: 'Barbell' },
  { id: 'pike-push-ups', name: 'Pike Push-ups', category: 'Shoulders', muscleGroups: ['Shoulders', 'Triceps'], equipment: 'Bodyweight' },

  // Arms
  { id: 'barbell-curl', name: 'Barbell Curl', category: 'Arms', muscleGroups: ['Biceps'], equipment: 'Barbell' },
  { id: 'dumbbell-curl', name: 'Dumbbell Curl', category: 'Arms', muscleGroups: ['Biceps'], equipment: 'Dumbbells' },
  { id: 'hammer-curl', name: 'Hammer Curl', category: 'Arms', muscleGroups: ['Biceps', 'Forearms'], equipment: 'Dumbbells' },
  { id: 'preacher-curl', name: 'Preacher Curl', category: 'Arms', muscleGroups: ['Biceps'], equipment: 'Barbell' },
  { id: 'concentration-curl', name: 'Concentration Curl', category: 'Arms', muscleGroups: ['Biceps'], equipment: 'Dumbbells' },
  { id: 'close-grip-bench-press', name: 'Close Grip Bench Press', category: 'Arms', muscleGroups: ['Triceps'], equipment: 'Barbell' },
  { id: 'tricep-dips', name: 'Tricep Dips', category: 'Arms', muscleGroups: ['Triceps'], equipment: 'Bodyweight' },
  { id: 'overhead-tricep-extension', name: 'Overhead Tricep Extension', category: 'Arms', muscleGroups: ['Triceps'], equipment: 'Dumbbells' },
  { id: 'tricep-pushdown', name: 'Tricep Pushdown', category: 'Arms', muscleGroups: ['Triceps'], equipment: 'Cable' },
  { id: 'skull-crushers', name: 'Skull Crushers', category: 'Arms', muscleGroups: ['Triceps'], equipment: 'Barbell' },

  // Legs
  { id: 'squat', name: 'Squat', category: 'Legs', muscleGroups: ['Quads', 'Glutes', 'Hamstrings'], equipment: 'Barbell' },
  { id: 'front-squat', name: 'Front Squat', category: 'Legs', muscleGroups: ['Quads', 'Glutes', 'Core'], equipment: 'Barbell' },
  { id: 'bulgarian-split-squat', name: 'Bulgarian Split Squat', category: 'Legs', muscleGroups: ['Quads', 'Glutes'], equipment: 'Bodyweight' },
  { id: 'lunges', name: 'Lunges', category: 'Legs', muscleGroups: ['Quads', 'Glutes'], equipment: 'Bodyweight' },
  { id: 'leg-press', name: 'Leg Press', category: 'Legs', muscleGroups: ['Quads', 'Glutes'], equipment: 'Machine' },
  { id: 'leg-extension', name: 'Leg Extension', category: 'Legs', muscleGroups: ['Quads'], equipment: 'Machine' },
  { id: 'romanian-deadlift', name: 'Romanian Deadlift', category: 'Legs', muscleGroups: ['Hamstrings', 'Glutes'], equipment: 'Barbell' },
  { id: 'stiff-leg-deadlift', name: 'Stiff Leg Deadlift', category: 'Legs', muscleGroups: ['Hamstrings', 'Glutes'], equipment: 'Barbell' },
  { id: 'leg-curl', name: 'Leg Curl', category: 'Legs', muscleGroups: ['Hamstrings'], equipment: 'Machine' },
  { id: 'calf-raises', name: 'Calf Raises', category: 'Legs', muscleGroups: ['Calves'], equipment: 'Bodyweight' },
  { id: 'seated-calf-raises', name: 'Seated Calf Raises', category: 'Legs', muscleGroups: ['Calves'], equipment: 'Machine' },
  { id: 'hip-thrust', name: 'Hip Thrust', category: 'Legs', muscleGroups: ['Glutes', 'Hamstrings'], equipment: 'Barbell' },
  { id: 'glute-bridge', name: 'Glute Bridge', category: 'Legs', muscleGroups: ['Glutes', 'Hamstrings'], equipment: 'Bodyweight' },

  // Core
  { id: 'plank', name: 'Plank', category: 'Core', muscleGroups: ['Core'], equipment: 'Bodyweight' },
  { id: 'crunches', name: 'Crunches', category: 'Core', muscleGroups: ['Abs'], equipment: 'Bodyweight' },
  { id: 'russian-twists', name: 'Russian Twists', category: 'Core', muscleGroups: ['Obliques'], equipment: 'Bodyweight' },
  { id: 'mountain-climbers', name: 'Mountain Climbers', category: 'Core', muscleGroups: ['Core', 'Cardio'], equipment: 'Bodyweight' },
  { id: 'dead-bug', name: 'Dead Bug', category: 'Core', muscleGroups: ['Core'], equipment: 'Bodyweight' },
  { id: 'bicycle-crunches', name: 'Bicycle Crunches', category: 'Core', muscleGroups: ['Abs', 'Obliques'], equipment: 'Bodyweight' },
  { id: 'hanging-leg-raises', name: 'Hanging Leg Raises', category: 'Core', muscleGroups: ['Abs'], equipment: 'Bodyweight' },
  { id: 'ab-wheel', name: 'Ab Wheel', category: 'Core', muscleGroups: ['Core'], equipment: 'Ab Wheel' },
  { id: 'pallof-press', name: 'Pallof Press', category: 'Core', muscleGroups: ['Core'], equipment: 'Cable' },

  // Cardio
  { id: 'running', name: 'Running', category: 'Cardio', muscleGroups: ['Full Body'], equipment: 'Treadmill' },
  { id: 'cycling', name: 'Cycling', category: 'Cardio', muscleGroups: ['Legs'], equipment: 'Bike' },
  { id: 'rowing', name: 'Rowing', category: 'Cardio', muscleGroups: ['Full Body'], equipment: 'Rowing Machine' },
  { id: 'elliptical', name: 'Elliptical', category: 'Cardio', muscleGroups: ['Full Body'], equipment: 'Elliptical' },
  { id: 'jumping-jacks', name: 'Jumping Jacks', category: 'Cardio', muscleGroups: ['Full Body'], equipment: 'Bodyweight' },
  { id: 'burpees', name: 'Burpees', category: 'Cardio', muscleGroups: ['Full Body'], equipment: 'Bodyweight' },
  { id: 'jump-rope', name: 'Jump Rope', category: 'Cardio', muscleGroups: ['Full Body'], equipment: 'Jump Rope' },
  { id: 'high-knees', name: 'High Knees', category: 'Cardio', muscleGroups: ['Legs'], equipment: 'Bodyweight' },
];

export const exerciseCategories = [
  'Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Core', 'Cardio'
];

export const muscleGroups = [
  'Chest', 'Upper Chest', 'Lower Chest', 'Back', 'Lats', 'Traps', 'Rear Delts',
  'Shoulders', 'Front Delts', 'Side Delts', 'Biceps', 'Triceps', 'Forearms',
  'Quads', 'Hamstrings', 'Glutes', 'Calves', 'Abs', 'Obliques', 'Core'
];

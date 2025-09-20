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

  // PPL Routine Specific Exercises
  // Chest - PUSH Day
  { id: 'barbell-bench-press', name: 'Press Banca Barra', category: 'Chest', muscleGroups: ['Chest', 'Shoulders', 'Triceps'], equipment: 'Barbell' },
  { id: 'incline-machine-press', name: 'Press Inclinado Máquina Discos', category: 'Chest', muscleGroups: ['Upper Chest', 'Shoulders', 'Triceps'], equipment: 'Machine' },
  { id: 'pec-deck', name: 'Pec Deck', category: 'Chest', muscleGroups: ['Chest'], equipment: 'Machine' },
  { id: 'incline-dumbbell-press', name: 'Press Inclinado Mancuernas', category: 'Chest', muscleGroups: ['Upper Chest', 'Shoulders', 'Triceps'], equipment: 'Dumbbells' },
  { id: 'flat-machine-press', name: 'Press Plano Máquina', category: 'Chest', muscleGroups: ['Chest', 'Shoulders', 'Triceps'], equipment: 'Machine' },
  { id: 'cable-flyes', name: 'Flies con Cable (Cruce)', category: 'Chest', muscleGroups: ['Chest'], equipment: 'Cable' },

  // Shoulders - PUSH Day
  { id: 'cable-lateral-raises', name: 'Elevaciones Laterales Cable (con muñequera)', category: 'Shoulders', muscleGroups: ['Side Delts'], equipment: 'Cable' },

  // Triceps - PUSH Day
  { id: 'tricep-pushdown-bar', name: 'Extensión Tríceps en Polea Barra Recta', category: 'Arms', muscleGroups: ['Triceps'], equipment: 'Cable' },
  { id: 'overhead-tricep-extension-cable', name: 'Extensión Overhead Tríceps Cuerda', category: 'Arms', muscleGroups: ['Triceps'], equipment: 'Cable' },
  { id: 'tricep-pushdown', name: 'Extensión Tríceps Barra Recta', category: 'Arms', muscleGroups: ['Triceps'], equipment: 'Cable' },
  { id: 'unilateral-tricep-extension', name: 'Extensión Unilateral Tríceps Polea', category: 'Arms', muscleGroups: ['Triceps'], equipment: 'Cable' },

  // Back - PULL Day
  { id: 'wide-grip-pulldown', name: 'Jalón al Pecho Agarre Amplio', category: 'Back', muscleGroups: ['Lats', 'Biceps'], equipment: 'Cable' },
  { id: 'seated-cable-row', name: 'Remo Sentado Polea', category: 'Back', muscleGroups: ['Back', 'Biceps'], equipment: 'Cable' },
  { id: 'open-row-machine', name: 'Remo Abierto en Máquina', category: 'Back', muscleGroups: ['Upper Back', 'Rear Delts'], equipment: 'Machine' },
  { id: 'reverse-pec-deck', name: 'Reverse Pec Deck', category: 'Back', muscleGroups: ['Rear Delts', 'Upper Back'], equipment: 'Machine' },
  { id: 'assisted-pullups', name: 'Dominadas Asistidas', category: 'Back', muscleGroups: ['Lats', 'Biceps'], equipment: 'Machine' },
  { id: 'neutral-grip-pulldown', name: 'Jalón Neutro', category: 'Back', muscleGroups: ['Lats', 'Biceps'], equipment: 'Cable' },
  { id: 'close-grip-pulldown', name: 'Jalón al Pecho Cerrado', category: 'Back', muscleGroups: ['Lats', 'Biceps'], equipment: 'Cable' },
  { id: 'machine-row', name: 'Remo en Máquina', category: 'Back', muscleGroups: ['Back', 'Biceps'], equipment: 'Machine' },
  { id: 'face-pulls', name: 'Face Pull', category: 'Back', muscleGroups: ['Rear Delts', 'Upper Back'], equipment: 'Cable' },

  // Biceps - PULL Day
  { id: 'unilateral-preacher-curl', name: 'Curl Predicador Unilateral Mancuernas', category: 'Arms', muscleGroups: ['Biceps'], equipment: 'Dumbbells' },
  { id: 'bayesian-curl', name: 'Curl Bayesian (Polea)', category: 'Arms', muscleGroups: ['Biceps'], equipment: 'Cable' },
  { id: 'unilateral-preacher-curl-alt', name: 'Curl Predicador Unilateral', category: 'Arms', muscleGroups: ['Biceps'], equipment: 'Dumbbells' },
  { id: 'hammer-curl', name: 'Curl Martillo Mancuernas', category: 'Arms', muscleGroups: ['Biceps', 'Forearms'], equipment: 'Dumbbells' },

  // Legs - LEGS Day
  { id: 'smith-squat', name: 'Sentadilla Smith Profunda', category: 'Legs', muscleGroups: ['Quads', 'Glutes'], equipment: 'Smith Machine' },
  { id: 'romanian-deadlift', name: 'Peso Muerto Rumano', category: 'Legs', muscleGroups: ['Hamstrings', 'Glutes'], equipment: 'Barbell' },
  { id: 'leg-press-45', name: 'Prensa 45°', category: 'Legs', muscleGroups: ['Quads', 'Glutes'], equipment: 'Machine' },
  { id: 'leg-extension', name: 'Extensión de Cuádriceps', category: 'Legs', muscleGroups: ['Quads'], equipment: 'Machine' },
  { id: 'leg-curl', name: 'Curl Femoral Tumbado/Sentado', category: 'Legs', muscleGroups: ['Hamstrings'], equipment: 'Machine' },
  { id: 'hip-abduction', name: 'Abductores en Máquina', category: 'Legs', muscleGroups: ['Glutes', 'Hip Abductors'], equipment: 'Machine' },
  { id: 'seated-calf-raises', name: 'Gemelos (Sentado)', category: 'Legs', muscleGroups: ['Calves'], equipment: 'Machine' },
  { id: 'standing-calf-raises', name: 'Gemelos (De Pie)', category: 'Legs', muscleGroups: ['Calves'], equipment: 'Machine' },

  // Additional exercises from user request
  { id: 'machine-row-high-focus', name: 'Remo en máquina (foco espalda alta)', category: 'Back', muscleGroups: ['Upper Back', 'Rear Delts', 'Traps'], equipment: 'Machine' },
  { id: 'cable-lateral-raises-pulley', name: 'Elevaciones laterales en polea', category: 'Shoulders', muscleGroups: ['Side Delts'], equipment: 'Cable' },
  { id: 'scott-curl-unilateral', name: 'Curl de bíceps (Scott unilateral)', category: 'Arms', muscleGroups: ['Biceps'], equipment: 'Dumbbells' },
  { id: 'jm-press', name: 'JM Press', category: 'Arms', muscleGroups: ['Triceps', 'Shoulders'], equipment: 'Barbell' },
  { id: 'military-press-dumbbells', name: 'Press militar (mancuernas/máquina)', category: 'Shoulders', muscleGroups: ['Front Delts', 'Shoulders'], equipment: 'Dumbbells' },
  { id: 'close-grip-pulldown-triangle', name: 'Jalón al pecho (agarre cerrado/triángulo)', category: 'Back', muscleGroups: ['Lats', 'Biceps'], equipment: 'Cable' },
  { id: 'tricep-rope-extension', name: 'Extensión de tríceps cuerda', category: 'Arms', muscleGroups: ['Triceps'], equipment: 'Cable' },
  { id: 'pec-deck-machine', name: 'Pec Deck', category: 'Chest', muscleGroups: ['Chest', 'Inner Chest'], equipment: 'Machine' },
];

export const exerciseCategories = [
  'Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Core', 'Cardio'
];

export const muscleGroups = [
  'Chest', 'Upper Chest', 'Lower Chest', 'Back', 'Lats', 'Traps', 'Rear Delts',
  'Shoulders', 'Front Delts', 'Side Delts', 'Biceps', 'Triceps', 'Forearms',
  'Quads', 'Hamstrings', 'Glutes', 'Calves', 'Abs', 'Obliques', 'Core'
];

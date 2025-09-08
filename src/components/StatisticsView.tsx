import React, { useMemo } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts';
import { 
  TrendingUp, 
  Calendar, 
  Target, 
  Award, 
  Activity,
  Dumbbell,
  Clock
} from 'lucide-react';
import { Workout, Routine } from '../types';

interface StatisticsViewProps {
  workouts: Workout[];
  routines: Routine[];
}

const StatisticsView: React.FC<StatisticsViewProps> = ({ workouts, routines }) => {
  // Colores para los gráficos
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#00ff00', '#ff00ff'];

  // Calcular estadísticas generales
  const generalStats = useMemo(() => {
    const totalWorkouts = workouts.length;
    const totalExercises = workouts.reduce((acc, workout) => acc + workout.exercises.length, 0);
    const totalSets = workouts.reduce((acc, workout) => 
      acc + workout.exercises.reduce((exAcc, exercise) => exAcc + exercise.sets.length, 0), 0
    );
    
    // Calcular duración promedio
    const workoutsWithDuration = workouts.filter(w => w.duration);
    const avgDuration = workoutsWithDuration.length > 0 
      ? workoutsWithDuration.reduce((acc, w) => acc + (w.duration || 0), 0) / workoutsWithDuration.length
      : 0;

    // Calcular constancia (días de entrenamiento en los últimos 30 días)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentWorkouts = workouts.filter(w => new Date(w.date) >= thirtyDaysAgo);
    const uniqueDays = new Set(recentWorkouts.map(w => new Date(w.date).toDateString())).size;

    return {
      totalWorkouts,
      totalExercises,
      totalSets,
      avgDuration: Math.round(avgDuration),
      consistency: Math.round((uniqueDays / 30) * 100)
    };
  }, [workouts]);

  // Datos para gráfico de entrenamientos por semana
  const weeklyData = useMemo(() => {
    const last12Weeks = Array.from({ length: 12 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (11 - i) * 7);
      const weekStart = new Date(date);
      weekStart.setDate(weekStart.getDate() - weekStart.getDay());
      
      const weekWorkouts = workouts.filter(workout => {
        const workoutDate = new Date(workout.date);
        return workoutDate >= weekStart && workoutDate < new Date(weekStart.getTime() + 7 * 24 * 60 * 60 * 1000);
      }).length;

      return {
        week: `Sem ${12 - i}`,
        workouts: weekWorkouts,
        date: weekStart.toLocaleDateString('es-ES', { month: 'short', day: 'numeric' })
      };
    });

    return last12Weeks;
  }, [workouts]);

  // Datos para gráfico de ejercicios más frecuentes
  const exerciseFrequency = useMemo(() => {
    const exerciseCount: { [key: string]: number } = {};
    
    workouts.forEach(workout => {
      workout.exercises.forEach(exercise => {
        const name = exercise.exercise.name;
        exerciseCount[name] = (exerciseCount[name] || 0) + 1;
      });
    });

    return Object.entries(exerciseCount)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);
  }, [workouts]);

  // Datos para gráfico de progreso de peso (ejemplo con press de banca)
  const weightProgress = useMemo(() => {
    const benchPressWorkouts = workouts
      .map(workout => {
        const benchPress = workout.exercises.find(ex => 
          ex.exercise.name.toLowerCase().includes('press') || 
          ex.exercise.name.toLowerCase().includes('banca')
        );
        if (benchPress && benchPress.sets.length > 0) {
          const maxWeight = Math.max(...benchPress.sets.map(set => set.weight));
          return {
            date: new Date(workout.date),
            weight: maxWeight,
            unit: benchPress.weightUnit
          };
        }
        return null;
      })
      .filter(Boolean)
      .sort((a, b) => a!.date.getTime() - b!.date.getTime())
      .slice(-10);

    return benchPressWorkouts.map((workout, index) => ({
      session: `Sesión ${index + 1}`,
      weight: workout!.weight,
      unit: workout!.unit
    }));
  }, [workouts]);

  // Datos para gráfico de distribución de músculos
  const muscleGroupData = useMemo(() => {
    const muscleCount: { [key: string]: number } = {};
    
    workouts.forEach(workout => {
      workout.exercises.forEach(exercise => {
        exercise.exercise.muscleGroups.forEach(muscle => {
          muscleCount[muscle] = (muscleCount[muscle] || 0) + 1;
        });
      });
    });

    return Object.entries(muscleCount)
      .map(([muscle, count]) => ({ name: muscle, value: count }))
      .sort((a, b) => b.value - a.value);
  }, [workouts]);

  // Calcular días de entrenamiento consecutivos
  const consecutiveDays = useMemo(() => {
    if (workouts.length === 0) return 0;
    
    const sortedWorkouts = workouts
      .map(w => new Date(w.date))
      .sort((a, b) => b.getTime() - a.getTime());
    
    let consecutive = 0;
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    
    for (const workoutDate of sortedWorkouts) {
      const diffTime = currentDate.getTime() - workoutDate.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === consecutive + 1) {
        consecutive++;
        currentDate = workoutDate;
      } else if (diffDays === consecutive) {
        // Mismo día, no cuenta
        continue;
      } else {
        break;
      }
    }
    
    return consecutive;
  }, [workouts]);

  return (
    <div className="statistics-view">
      <div className="stats-header">
        <h1>Estadísticas</h1>
        <p>Analiza tu progreso y rendimiento</p>
      </div>

      {/* Estadísticas generales */}
      <div className="stats-overview">
        <div className="stat-card">
          <div className="stat-icon">
            <Activity size={24} />
          </div>
          <div className="stat-content">
            <h3>{generalStats.totalWorkouts}</h3>
            <p>Entrenamientos totales</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Target size={24} />
          </div>
          <div className="stat-content">
            <h3>{generalStats.totalExercises}</h3>
            <p>Ejercicios realizados</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Dumbbell size={24} />
          </div>
          <div className="stat-content">
            <h3>{generalStats.totalSets}</h3>
            <p>Series completadas</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Clock size={24} />
          </div>
          <div className="stat-content">
            <h3>{generalStats.avgDuration} min</h3>
            <p>Duración promedio</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <h3>{generalStats.consistency}%</h3>
            <p>Constancia (30 días)</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Award size={24} />
          </div>
          <div className="stat-content">
            <h3>{consecutiveDays}</h3>
            <p>Días consecutivos</p>
          </div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="charts-grid">
        {/* Entrenamientos por semana */}
        <div className="chart-container">
          <h3>Entrenamientos por semana</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="workouts" 
                stroke="#8884d8" 
                fill="#8884d8" 
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Ejercicios más frecuentes */}
        <div className="chart-container">
          <h3>Ejercicios más frecuentes</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={exerciseFrequency} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Progreso de peso */}
        {weightProgress.length > 0 && (
          <div className="chart-container">
            <h3>Progreso de peso (Press de banca)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weightProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="session" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [`${value} ${weightProgress[0]?.unit}`, 'Peso máximo']}
                />
                <Line 
                  type="monotone" 
                  dataKey="weight" 
                  stroke="#ff7300" 
                  strokeWidth={3}
                  dot={{ fill: '#ff7300', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Distribución de grupos musculares */}
        <div className="chart-container">
          <h3>Distribución de grupos musculares</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={muscleGroupData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {muscleGroupData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Mensaje motivacional basado en estadísticas */}
      <div className="motivation-section">
        <h3>¡Sigue así!</h3>
        <div className="motivation-content">
          {generalStats.consistency >= 70 ? (
            <p>🎉 ¡Excelente constancia! Has entrenado {generalStats.consistency}% de los días en el último mes.</p>
          ) : generalStats.consistency >= 50 ? (
            <p>👍 ¡Buen trabajo! Tu constancia es del {generalStats.consistency}%. ¡Sigue mejorando!</p>
          ) : (
            <p>💪 ¡Tú puedes! Intenta ser más constante con tus entrenamientos. Cada día cuenta.</p>
          )}
          
          {consecutiveDays > 0 && (
            <p>🔥 ¡Llevas {consecutiveDays} días consecutivos entrenando! ¡No pares ahora!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatisticsView;

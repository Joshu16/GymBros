# Gym Bros 💪

Una aplicación web moderna y responsive para registrar y gestionar tus entrenamientos de gimnasio. Diseñada específicamente para uso móvil, te permite crear rutinas personalizadas, registrar entrenamientos detallados y exportar tu progreso.

## 🚀 Características

- **📋 Gestión de Rutinas**: Crea, edita y elimina rutinas de entrenamiento personalizadas
- **🏋️ Registro de Entrenamientos**: Registra series, peso, repeticiones, RIR (Reps in Reserve) y notas
- **📊 Historial Completo**: Visualiza todos tus entrenamientos organizados por fecha
- **📤 Exportar Datos**: Copia o descarga tus registros de entrenamiento
- **⚖️ Unidades de Peso**: Soporte para kilogramos (kg) y libras (lbs)
- **🌙 Modo Oscuro**: Interfaz adaptable con tema claro y oscuro
- **📱 Diseño Responsive**: Optimizado para dispositivos móviles
- **💾 Almacenamiento Local**: Todos los datos se guardan en tu dispositivo

## 🎯 Ejercicios Incluidos

La aplicación incluye una base de datos completa con más de 60 ejercicios organizados por categorías:

- **Pecho**: Press de banca, press inclinado, flexiones, dips, etc.
- **Espalda**: Dominadas, remo, jalones, peso muerto, etc.
- **Hombros**: Press militar, elevaciones laterales, face pulls, etc.
- **Brazos**: Curl de bíceps, extensiones de tríceps, martillo, etc.
- **Piernas**: Sentadillas, zancadas, peso muerto rumano, etc.
- **Core**: Plancha, abdominales, mountain climbers, etc.
- **Cardio**: Correr, ciclismo, remo, burpees, etc.

## 🛠️ Tecnologías Utilizadas

- **React 19** con TypeScript
- **Vite** para el build y desarrollo
- **Lucide React** para iconos
- **date-fns** para manejo de fechas
- **CSS Variables** para theming
- **localStorage** para persistencia de datos

## 🚀 Instalación y Uso

### Desarrollo Local

1. Clona el repositorio:
```bash
git clone https://github.com/Joshu16/GymBros.git
cd GymBros
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

### Despliegue en GitHub Pages

1. Construye el proyecto:
```bash
npm run build
```

2. Despliega a GitHub Pages:
```bash
npm run deploy
```

## 📱 Uso de la Aplicación

### 1. Crear Rutinas
- Ve a la pestaña "Rutinas"
- Haz clic en "Nueva Rutina"
- Agrega ejercicios de la base de datos
- Configura series, peso y repeticiones para cada ejercicio
- Guarda tu rutina personalizada

### 2. Realizar Entrenamientos
- Selecciona una rutina existente
- Haz clic en "Comenzar Entrenamiento"
- Registra peso, repeticiones y RIR para cada serie
- Agrega notas específicas si es necesario
- Completa el entrenamiento cuando termines

### 3. Revisar Historial
- Ve a la pestaña "Historial"
- Visualiza todos tus entrenamientos organizados por fecha
- Copia o descarga registros específicos
- Exporta todos tus datos para respaldo

### 4. Configuración
- Ajusta la unidad de peso por defecto (kg/lbs)
- Activa/desactiva el modo oscuro
- Exporta o importa tus datos
- Gestiona la configuración de la aplicación

## 🔧 Configuración

### Variables de Entorno
No se requieren variables de entorno para el funcionamiento básico.

### Personalización
- Modifica `src/data/exercises.ts` para agregar nuevos ejercicios
- Ajusta los estilos en `src/App.css`
- Personaliza los colores del tema en las variables CSS

## 📦 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx
│   ├── Navigation.tsx
│   ├── RoutinesView.tsx
│   ├── RoutineForm.tsx
│   ├── WorkoutView.tsx
│   ├── HistoryView.tsx
│   └── SettingsView.tsx
├── data/               # Datos de la aplicación
│   └── exercises.ts
├── hooks/              # Hooks personalizados
│   ├── useAppData.ts
│   └── useLocalStorage.ts
├── types/              # Definiciones de TypeScript
│   └── index.ts
├── utils/              # Utilidades
│   └── storage.ts
├── App.jsx
├── App.css
└── main.jsx
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [Lucide](https://lucide.dev/) por los iconos
- [date-fns](https://date-fns.org/) por las utilidades de fecha
- [React](https://react.dev/) por el framework
- [Vite](https://vitejs.dev/) por la herramienta de build

## 📞 Contacto

Si tienes preguntas o sugerencias, no dudes en abrir un issue en GitHub.

---

¡Entrena duro y mantén el progreso! 💪
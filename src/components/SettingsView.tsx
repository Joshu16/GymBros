import React from 'react';
import { Settings as SettingsIcon, Trash2, Download, Upload } from 'lucide-react';
import { AppSettings } from '../types';
import { storage } from '../utils/storage';

interface SettingsViewProps {
  settings: AppSettings;
  onUpdateSettings: (settings: AppSettings) => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({
  settings,
  onUpdateSettings,
}) => {
  const handleWeightUnitChange = (unit: 'kg' | 'lbs') => {
    onUpdateSettings({ ...settings, defaultWeightUnit: unit });
  };

  const handleDarkModeToggle = () => {
    onUpdateSettings({ ...settings, darkMode: !settings.darkMode });
  };

  const exportData = () => {
    try {
      const data = {
        routines: storage.getRoutines(),
        workouts: storage.getWorkouts(),
        settings: storage.getSettings(),
        exportDate: new Date().toISOString(),
        version: '1.0.0'
      };
      
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `gym-bros-backup-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting data:', error);
      alert('Error al exportar los datos');
    }
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        
        if (data.routines) {
          storage.saveRoutines(data.routines);
        }
        if (data.workouts) {
          storage.saveWorkouts(data.workouts);
        }
        if (data.settings) {
          storage.saveSettings(data.settings);
          onUpdateSettings(data.settings);
        }
        
        alert('Datos importados correctamente. Recarga la página para ver los cambios.');
      } catch (error) {
        console.error('Error importing data:', error);
        alert('Error al importar los datos. Verifica que el archivo sea válido.');
      }
    };
    reader.readAsText(file);
  };

  const clearAllData = () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar TODOS los datos? Esta acción no se puede deshacer.')) {
      storage.clearAll();
      alert('Todos los datos han sido eliminados. Recarga la página para ver los cambios.');
    }
  };

  return (
    <div className="settings-view">
      <div className="view-header">
        <h2>Configuración</h2>
      </div>

      <div className="settings-content">
        <div className="settings-section">
          <h3>Preferencias Generales</h3>
          
          <div className="setting-item">
            <div className="setting-info">
              <label htmlFor="weight-unit">Unidad de peso por defecto</label>
              <p>Selecciona la unidad de peso que prefieres usar</p>
            </div>
            <div className="setting-control">
              <select
                id="weight-unit"
                value={settings.defaultWeightUnit}
                onChange={(e) => handleWeightUnitChange(e.target.value as 'kg' | 'lbs')}
              >
                <option value="kg">Kilogramos (kg)</option>
                <option value="lbs">Libras (lbs)</option>
              </select>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <label htmlFor="dark-mode">Modo oscuro</label>
              <p>Cambia entre tema claro y oscuro</p>
            </div>
            <div className="setting-control">
              <label className="toggle">
                <input
                  id="dark-mode"
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={handleDarkModeToggle}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h3>Datos</h3>
          
          <div className="setting-item">
            <div className="setting-info">
              <label>Exportar datos</label>
              <p>Descarga una copia de seguridad de todos tus datos</p>
            </div>
            <div className="setting-control">
              <button className="btn btn-secondary" onClick={exportData}>
                <Download size={16} />
                Exportar
              </button>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <label htmlFor="import-data">Importar datos</label>
              <p>Restaura datos desde un archivo de respaldo</p>
            </div>
            <div className="setting-control">
              <input
                id="import-data"
                type="file"
                accept=".json"
                onChange={importData}
                style={{ display: 'none' }}
              />
              <label htmlFor="import-data" className="btn btn-secondary">
                <Upload size={16} />
                Importar
              </label>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <label>Eliminar todos los datos</label>
              <p>Elimina permanentemente todas las rutinas y entrenamientos</p>
            </div>
            <div className="setting-control">
              <button 
                className="btn btn-danger" 
                onClick={clearAllData}
              >
                <Trash2 size={16} />
                Eliminar Todo
              </button>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h3>Acerca de</h3>
          
          <div className="about-info">
            <div className="app-info">
              <SettingsIcon size={48} className="app-icon" />
              <div>
                <h4>Gym Bros</h4>
                <p>Versión 1.0.0</p>
                <p>Una aplicación para registrar y gestionar tus entrenamientos de gimnasio.</p>
              </div>
            </div>
            
            <div className="features">
              <h5>Características:</h5>
              <ul>
                <li>✅ Crear y gestionar rutinas de entrenamiento</li>
                <li>✅ Registrar entrenamientos con series, peso, reps y RIR</li>
                <li>✅ Historial completo de entrenamientos</li>
                <li>✅ Exportar y copiar registros de entrenamiento</li>
                <li>✅ Soporte para kg y libras</li>
                <li>✅ Modo oscuro</li>
                <li>✅ Interfaz optimizada para móvil</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;

import { useState } from 'react';
import InputFecha from './components/InputFecha';
import ResultadoHoroscopo from './components/ResultadoHoroscopo';
import { signosZodiacales } from './data/horoscopo';
import './styles/App.css';  

function App() {
  const [signo, setSigno] = useState(null);

  const calcularSignoZodiacal = (fecha) => {
    const fechaNacimiento = new Date(fecha);
    
    // Encontrar el signo zodiacal basado en la fecha de nacimiento
    const signoEncontrado = signosZodiacales.find(({ inicio, fin }) => {
      const [diaInicio, mesInicio] = inicio.split('/');
      const [diaFin, mesFin] = fin.split('/');
      const fechaInicio = new Date(fechaNacimiento.getFullYear(), mesInicio - 1, diaInicio);
      const fechaFin = new Date(fechaNacimiento.getFullYear(), mesFin - 1, diaFin);
      
      if (mesInicio === '12' && mesFin === '1') {
        fechaFin.setFullYear(fechaNacimiento.getFullYear() + 1); // Caso especial para Capricornio
      }

      return fechaNacimiento >= fechaInicio && fechaNacimiento <= fechaFin;
    });

    setSigno(signoEncontrado);
  };

  return (
    <div className="app">
      <div className="input-container">
        <InputFecha calcularSigno={calcularSignoZodiacal} />
      </div>
      <div className="resultado-container">
        {signo && <ResultadoHoroscopo signo={signo} />}
      </div>
    </div>
    
  );
}

export default App;

import PropTypes from 'prop-types';
import '../styles/InputFecha.css';
import '../styles/Card.css'; 
import { useState } from 'react';

const InputFecha = ({ calcularSigno }) => {
  const [fecha, setFecha] = useState('');

  const manejarCambio = (e) => {
    setFecha(e.target.value);
  };

  const manejarConsulta = () => {
    calcularSigno(fecha);
  };

  return (
    <div className="card">
      <h3>Ingrese su fecha de nacimiento:</h3>
      <input type="date" onChange={manejarCambio} />
      <button onClick={manejarConsulta}>Consultar</button>
    </div>
  );
};

InputFecha.propTypes = {
  calcularSigno: PropTypes.func.isRequired,
};

export default InputFecha;

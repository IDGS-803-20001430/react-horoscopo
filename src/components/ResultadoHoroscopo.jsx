import PropTypes from 'prop-types';
import '../styles/ResultadoHoroscopo.css';
import '../styles/Card.css'; 

const ResultadoHoroscopo = ({ signo }) => {
    const { nombre, rango, descripcion, imagen } = signo;
  
    return (
        <div className="card">
            <h2>{nombre}</h2>
            <div className="imagen-signo">
                <img src={`img/horoscopos/${imagen}.png`} alt={nombre} />
            </div>
            <div className="info-signo">
                <p>{rango}</p>
                <p>{descripcion}</p>
            </div>
        </div>
    );
};

ResultadoHoroscopo.propTypes = {
    signo: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        rango: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        imagen: PropTypes.string.isRequired,
    }).isRequired,
};

export default ResultadoHoroscopo;

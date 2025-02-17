import { useNavigate } from'react-router-dom';

const CerrarSesion = () => {

    const navigate = useNavigate();

    const cerrarSes = () => {                   //eliminamos el usuarioAdm logueado de sessionStorage
        window.sessionStorage.removeItem('usuarioAdm');
        navigate('/home'); 
    }

    return (
        <button className="btn btn-outline-danger" onClick={cerrarSes}>
        Cerrar Sesión
        </button>
    );
}

export default CerrarSesion;
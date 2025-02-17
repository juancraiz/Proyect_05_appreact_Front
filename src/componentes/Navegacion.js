import '../css/Navegacion.css'; //importo archivo de css
import CerrarSesion from './CerrarSesion';
import {Link} from 'react-router-dom';

function Navegacion() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary barraNav">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand" >Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/home' className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/boton' className="nav-link" >Boton</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/formulario' className="nav-link" >Formulario</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/personajes' className="nav-link" >Personajes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className="nav-link" >Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/admin' className="nav-link" >Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/usuarios' className="nav-link" >Usuarios</Link>
                            </li>
                        </ul>
                        <CerrarSesion/>
                    </div>
                </div>
            </nav>

        </>
    );
}

//exportamos para que cualquier otro componente q precise la barra de nav lo pueda utilizar
export default Navegacion;
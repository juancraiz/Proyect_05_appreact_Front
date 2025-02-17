import { Link } from 'react-router-dom';
import{useState,useEffect} from 'react';

const Formulario = () => {


const [nombre,setNombre] = useState('');
const [apellido,setApellido] = useState('');
const [ciudad,setCiudad] = useState('');

//1. Creo un hook definiendo un array para recibir datos
const [datos,setDatos] = useState([]);

//6. Sincronizar el localStorage cada vez que el array de datos agregue un nuevo elemento
useEffect(() => {
    window.localStorage.setItem('datos', JSON.stringify(datos)); //guardamos el array de datos en el LStorage
}, [datos]);

const guardarDatos =() => {
//2.Creamos el objeto de tipo persona para guardar luego en el array de datos
const persona = {
    nombre:nombre,
    apellido:apellido,
    ciudad:ciudad };

//3.Seteamos los datos de la persona en el array de datos
setDatos([...datos,persona]);

//5. Limpiamos los inputs
limpiarDatos();
}

const imprimirDatos = () => {
    console.log(`Datos ingresados: ${nombre}! - ${apellido} - ${ciudad}`)};

const limpiarDatos = () => {
    setNombre('');
    setApellido('');
    setCiudad('');};

    return (
        <>
            <h1 className="text-center mt-5 mb-5">
                Registro de Persona
            </h1>
            <div className="container">
                <form id="formlogin" > 
                    <div className="mb-3 w-50">
                        <label htmlFor="user" className="form-label">Nombre: </label>
                        <input type="text" 
                        className="form-control"
                        /*  id="user" -->no se usa*/ 
                        /* cuando el cliente escriba el elemento q tiene el valor de nombre,esdecir
                        cuando se produzca un cambio y se produzca un evento e que tenga el valor
                        nombre , entonces setea el valor de nombre a la variable nombre */
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)}
                        required />
                    </div>
                    <div className="mb-3 w-50">
                        <label htmlFor="user" className="form-label">Apellido: </label>
                        <input type="text" 
                        className="form-control"
                        value={apellido} 
                        onChange={(e) => setApellido(e.target.value)}
                        required />
                    </div>
                    <div className="mb-3 w-50">
                        <label htmlFor="user" className="form-label">Ciudad: </label>
                        <input type="text" 
                        className="form-control"
                        value={ciudad} 
                        onChange={(e) => setCiudad(e.target.value)}
                        required />
                    </div>
                    <div className="mb-3">
                        <button onClick={guardarDatos} type="button" className="btn btn-primary">Guardar</button>
                    </div>
                    <div className="mb-3">
                        <button onClick={limpiarDatos} type="reset" className="btn btn-danger">Reset</button>
                    </div>
                </form>
            </div>

            <Link to='/home'>
                <h5 className="text-center"> 🏠 Ir a Pagina Home </h5>
            </Link>
        </>
    );
};

export default Formulario;





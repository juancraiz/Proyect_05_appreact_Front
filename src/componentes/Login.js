import { Link } from 'react-router-dom';
import{useState} from 'react';
import { useNavigate } from "react-router-dom"; //importo Hook

const Login = () => {

//React hooks
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
//Hook navigate
const navigate = useNavigate();

const login = () => {
    if (email =='' || password ==''){
        alert('Todos los campos son obligatorios');
        return;
    }

    if (email =='juanmartincruzrap@gmail.com' && password =='123'){
        alert('Bienvenido Juan');
        
        //Guardar la sesion del usuario Administrator
        window.sessionStorage.setItem('usuarioAdm',email);
        navigate('/admin'); //me redirije a la pagina admin
    }
    else{alert('Datos Invalidos')
        navigate('*');
    }
limpiarDatos(); 
}

const limpiarDatos = () => {
    setEmail('');
    setPassword('')
}

    return (
        <>
            <h1 className="text-center mt-5 mb-5">
                Login
            </h1>
            <div className="container">
                <form id="formlogin">
                    <div className="mb-3 w-50">
                        <label htmlFor="user" className="form-label">email: </label>
                        <input type="email" 
                        className="form-control"
                        placeholder='pepe@ejemplo.com'
                        /*  id="user" -->no se usa*/ 
                        /* cuando el cliente escriba el elemento q tiene el valor de email,esdecir
                        cuando se produzca un cambio y se produzca un evento e que tenga el valor
                        email , entonces setea el valor de email a la variable email */
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    </div>
                    <div className="mb-3 w-50">
                        <label htmlFor="user" className="form-label">password: </label>
                        <input type="password" 
                        className="form-control"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    </div>
                    <div className="mb-3">
                        <button onClick={login} type="button" className="btn btn-success">Cargar Usuario</button>
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

export default Login;





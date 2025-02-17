import { useNavigate } from "react-router-dom"; 
import { useEffect,useState } from "react";

const Admin = () => {

    const [usuarioAdm, setUsuarioAdm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {

        //si existe el usuarioAdm entonces puede entrar a la pagina de admin
        if(window.sessionStorage.getItem('usuarioAdm')){
            setUsuarioAdm(usuarioAdm);
        }else{
            alert('Usuario no Logueado');
            navigate('*');
        }
    },[]);

    return(
        <>
            <h3 class="text-center mt-5 mb-5">
                Bienvenido Administrador
            </h3>
            <div className="text-center mt-5 mb-5">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1NYgYjhJceSmcYKVaVRnubuKQLy-7uiwqIw&s" alt="admin" />
            </div>
        
        
        </>
    )
}

export default Admin;
import Table from 'react-bootstrap/Table';
import '../css/Usuarios.css';
import React, { useState, useEffect } from'react';
import { useNavigate } from "react-router-dom"; 

function Usuarios() {
    const [usuarioAdm, setUsuarioAdm] = useState('');
    const navigate = useNavigate();
    const [datos, setDatos] = useState([]);

    useEffect(() => {

        //si existe el usuarioAdm entonces puede ver los usuarios
        if(window.sessionStorage.getItem('usuarioAdm')) {
            setUsuarioAdm(usuarioAdm);  //setea el nombre del usuario

            //traigo los datos de los usuarios para la lista
            setDatos(JSON.parse(window.localStorage.getItem('datos'))) 
    
        }else{
            alert('Usuario no Logueado'); //si no existe entonces no puede ver
            navigate('*');
        }
    },[]);


    return (
        <div className='container-users'>
        <h1 className='text-center mt-5 mb-5'>Listado de Usuarios</h1> 

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th> 
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Ciudad</th>
                </tr>
            </thead>
            <tbody>

            {datos.map((d,index) => ( 
                
                <tr key ={index} >
                    <td>{index + 1}</td>
                    <td>{d.nombre}</td>
                    <td>{d.apellido}</td>
                    <td>{d.ciudad}</td>
                </tr>
            ))}
            
            </tbody>
        </Table>
        </div>
    );
}

export default Usuarios;
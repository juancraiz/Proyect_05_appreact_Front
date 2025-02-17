import Tarjetas from "./Tarjetas";
import Button from'react-bootstrap/Button';
import {useEffect,useState} from 'react';
import '../css/Personajes.css'

const Personajes = () =>{

//la fcion useState es un array de personajes-componente q se actualiza cuando sea necesario 
const [personajes,setPersonajes]= useState([]); 

/*la fcion useEffect maneja los efectos en los componentes.En este caso extraemos datos de una BD */
useEffect(() => { 
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json()) //si la api responde entonces convertime los datos a .json
    .then(response => setPersonajes(response.results)) //por tanto pasale a setPersonajes los datos de la B.D.
    .catch(() => {console.log('Error, se cayo la Base de Datos')}) //si no recibimos es xq hay un error en la BD posiblemente
    } , []);

    const imprimirPersonajes = () => {
    console.log(personajes); 
    }

    return(
        <div className="personajes text-center mb-5 mt-5" >
        <h1 className="text-center mb-5 mt-5">
            Personajes con useEffect
        </h1>

        <Button onClick={imprimirPersonajes} >
            Imprimir datos de la Api
        </Button>

        <Tarjetas characters={personajes} /> 
        </div>               //paso el valor del dato en objeto ya q personajes es un objeto en JSX
    );
}

export default Personajes;


/* let array1 = [];

function Tarjetas(array1){
    return console.log(array1);
}
 */


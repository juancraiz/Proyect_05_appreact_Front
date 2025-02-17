const saludar = () => {
    alert('Hola desde React!');
}
const Boton = () => {
    return (
        <div className="text-center mt-5 mb-5">
        <button onClick={saludar} className="btn btn-danger"> Saludar al Cliente </button>
        </div>
    );
};

export default Boton;
import '../css/componentes.css';

export const saludar = (nombre) => {
    console.log("Creando etiqueta h1 saludar");

    const h1 = document.createElement("h1");
    h1.innerHTML = `Hola, ${ nombre }, como estás?`;

    document.body.append( h1 );
}
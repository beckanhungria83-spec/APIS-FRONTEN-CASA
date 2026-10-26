
import { useState } from "react";

function Informacion() {
    const [servicio, setServicio] = useState("");
    const [descripcion, setDescripcion] = useState("");

    async function consultarInformacion() {
        let resultado = await fetch("http://127.0.0.1:5000/informacion");
        let datos = await resultado.json();

        setServicio(datos.servicio);
        setDescripcion(datos.descripcion);
    }

    return (
        <div>
            <button onClick={consultarInformacion}>
                Consultar Información
            </button>

            <p>{servicio}</p>
            <p>{descripcion}</p>
        </div>
    );
}

export default Informacion;

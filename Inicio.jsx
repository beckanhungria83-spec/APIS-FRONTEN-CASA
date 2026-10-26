
import { useState } from "react";

function Inicio() {
    const [mensaje, setMensaje] = useState("");

    async function consumoInicio() {
        let resultado = await fetch("http://127.0.0.1:5000/inicio");
        let datos = await resultado.json();
        console.log(datos);
        setMensaje(datos.mensaje);
    }

    return (
        <div>
            <input placeholder="nombre" />
            <input placeholder="apellido" />
            <input placeholder="correo" />
            <button onClick={consumoInicio}>Aceptar</button>

            {mensaje && (
                <div style={{ marginTop: "20px", fontWeight: "bold" }}>
                    <p>{mensaje}</p>
                </div>
            )}
        </div>
    );
}

export default Inicio;

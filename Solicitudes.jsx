
import { useState } from "react";

function Solicitudes() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");

    async function enviarSolicitud() {
        try {
            let resultado = await fetch("http://127.0.0.1:5000/solicitudes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nombre: nombre,
                    apellido: apellido,
                    correo: correo
                })
            });

            let datos = await resultado.json();

            if (!resultado.ok) {
                setMensaje(datos.error);
                return;
            }

            setMensaje(datos.mensaje);

        } catch (error) {
            setMensaje("No hay conexión con el servidor");
        }
    }

    return (
        <div>
            <input
                placeholder="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <input
                placeholder="apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />

            <input
                placeholder="correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
            />

            <button onClick={enviarSolicitud}>Aceptar</button>

            {mensaje && <p>{mensaje}</p>}
        </div>
    );
}

export default Solicitudes;

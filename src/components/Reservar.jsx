import React, { useState, useEffect } from "react";

const Reservar = () => {

    const [reservas, setReservas] = useState([]);
    const [cont, setCont] = useState(() => {
        const contador = JSON.parse(localStorage.getItem('contador'));
        return contador !== null ? contador : 0;
    });
    const [editingReserva, setEditingReserva] = useState(null);
    const precios = { 'Individual': 20000, 'Doble': 40000, 'Suite': 60000 };

    useEffect(() => {
        const storedReservas = JSON.parse(localStorage.getItem('reservas')) || [];
        setReservas(storedReservas);
    }, []);

    useEffect(() => {
        localStorage.setItem('contador', JSON.stringify(cont));
    }, [cont]);

    const definirFecha = () => {
        const dia = new Date();
        const fecha = dia.toISOString().split('T')[0];
        return fecha;
    }

    const descargarJSON = () => {
        if (reservas.length === 0) {
            alert('No hay datos para descargar');
            return;
        }

        const jsonData = JSON.stringify(reservas);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'datos.json';
        link.click();
        URL.revokeObjectURL(url);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (editingReserva) {
            editarReserva();
        } else {
            crearReserva();
        }
    };

    const crearReserva = () => {
        const nombre = document.getElementById('imput-nombre').value;
        const email = document.getElementById('imput-email').value;
        const fechaEntrada = definirFecha();
        const fechaSalida = document.getElementById('imput-fecha-salida').value;
        const tipo = document.getElementById('imput-tipo').value;
        const noches = parseInt(document.getElementById('imput-noches').value);
        const tipoPago = document.getElementById('imput-tarjeta').checked ? 'tarjeta' : 'efectivo';
        const total = precios[tipo] * noches;

        const nuevaReserva = {
            id: cont + 1,
            nombre: nombre,
            email: email,
            fecha_entrada: fechaEntrada,
            fecha_salida: fechaSalida,
            tipo: tipo,
            noches: noches,
            tipo_pago: tipoPago,
            total: total
        };

        const updatedReservas = [...reservas, nuevaReserva];
        setReservas(updatedReservas);
        setCont(cont + 1);
        localStorage.setItem('reservas', JSON.stringify(updatedReservas));

        document.getElementById('crear-reserva-form').reset();
    };

    const cargarFormularioEdit = (id) => {
        const reserva = reservas.find(reserva => reserva.id === id);
        setEditingReserva(reserva);
        document.getElementById('imput-nombre').value = reserva.nombre;
        document.getElementById('imput-email').value = reserva.email;
        document.getElementById('imput-fecha-entrada').value = reserva.fecha_entrada;
        document.getElementById('imput-fecha-salida').value = reserva.fecha_salida;
        document.getElementById('imput-tipo').value = reserva.tipo;
        document.getElementById('imput-noches').value = reserva.noches;
        document.getElementById('imput-tarjeta').checked = reserva.tipo_pago === 'tarjeta';
    }

    const editarReserva = () => {
        const id = editingReserva.id;
        const nombre = document.getElementById('imput-nombre').value;
        const email = document.getElementById('imput-email').value;
        const fechaEntrada = document.getElementById('imput-fecha-entrada').value;
        const fechaSalida = document.getElementById('imput-fecha-salida').value;
        const tipo = document.getElementById('imput-tipo').value;
        const noches = parseInt(document.getElementById('imput-noches').value);
        const tipoPago = document.getElementById('imput-tarjeta').checked ? 'tarjeta' : 'efectivo';
        const total = precios[tipo] * noches;

        const reservaEditada = {
            id: id,
            nombre: nombre,
            email: email,
            fecha_entrada: fechaEntrada,
            fecha_salida: fechaSalida,
            tipo: tipo,
            noches: noches,
            tipo_pago: tipoPago,
            total: total
        };

        const updatedReservas = reservas.map(reserva =>
            reserva.id === id ? reservaEditada : reserva
        );

        setReservas(updatedReservas);
        setEditingReserva(null);
        localStorage.setItem('reservas', JSON.stringify(updatedReservas));

        document.getElementById('crear-reserva-form').reset();
    }

    const borrarReserva = (id) => {
        const updatedReservas = reservas.filter(reserva => reserva.id !== id);
        setReservas(updatedReservas);
        localStorage.setItem('reservas', JSON.stringify(updatedReservas));
    }

    return (
        <section className="reservar" id="reservar">
            <div className="cont-form-reserva activo" id="cont-form-reserva">
                <div className="cont-titulo-form">
                    <h3 className="titulo-form">{editingReserva ? 'Editar Reserva' : 'Crear Reserva'}</h3>
                    <div className="form-group">
                        <label htmlFor="imput-tarjeta">Pago tarjeta</label>
                        <input className="check" id="imput-tarjeta" type="checkbox" name="tarjeta" placeholder="" />
                    </div>
                </div>
                <form className="form-contenido" id="crear-reserva-form" onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="imput-nombre">Nombre</label>
                        <input className="imput" id="imput-nombre" type="text" name="nombre" placeholder="Nombre" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imput-email">Email</label>
                        <input className="imput" id="imput-email" type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imput-fecha-entrada">Fecha entrada</label>
                        <input className="imput" id="imput-fecha-entrada" type="text" name="fecha-entrada" placeholder="" value={definirFecha()} readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imput-fecha-salida">Fecha salida</label>
                        <input className="imput" id="imput-fecha-salida" type="date" name="fecha-salida" placeholder="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imput-tipo">Tipo de Habitación:</label>
                        <select className="imput" id="imput-tipo">
                            <option value="Individual">Individual</option>
                            <option value="Doble">Doble</option>
                            <option value="Suite">Suite</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imput-noches">Número de Noches:</label>
                        <input className="imput" type="number" id="imput-noches" min="1" defaultValue="1" />
                    </div>

                    <input className="boton-submit" type="submit" value={editingReserva ? 'Editar Reserva' : 'Crear Reserva'} />
                </form>
            </div>

            <div className="contenido">
                <div className="cont-titulo-contenido">
                    <h4 className="titulo-contenido">Reservas</h4>
                    <button className="boton-descarga" type="button" onClick={descargarJSON}>Descargar json</button>
                </div>

                <div className="data">
                    <table>
                        <thead className="head-tabla-huesped">
                            <tr>
                                <th>Reserva N</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Fecha entrada</th>
                                <th>Fecha salida</th>
                                <th>Tipo habitación</th>
                                <th>Noches</th>
                                <th>Tipo de pago</th>
                                <th>Pago</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="body-tabla-reserva">
                            {reservas.map(reserva => (
                                <tr key={reserva.id}>
                                    <td data-label="Reserva N">{reserva.id}</td>
                                    <td data-label="Nombre">{reserva.nombre}</td>
                                    <td data-label="Email">{reserva.email}</td>
                                    <td data-label="Fecha entrada">{reserva.fecha_entrada}</td>
                                    <td data-label="Fecha salida">{reserva.fecha_salida}</td>
                                    <td data-label="Tipo habitación">{reserva.tipo}</td>
                                    <td data-label="Noches">{reserva.noches}</td>
                                    <td data-label="Tipo de pago">{reserva.tipo_pago}</td>
                                    <td data-label="Pago">{reserva.total}</td>
                                    <td data-label="Acciones">
                                        <button className="acciones editar" type="button" onClick={() => cargarFormularioEdit(reserva.id)}>Editar</button>
                                        <button className="acciones borrar" type="button" onClick={() => borrarReserva(reserva.id)}>Borrar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Reservar;

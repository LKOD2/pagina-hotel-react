import React, { useState } from "react";

const Contacto = () => {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMensajeChange = (event) => {
    setMensaje(event.target.value);
  };

  const manejoFormulario = (event) => {
    event.preventDefault();
    alert("Gracias por enviar tus comentarios");
  };

  return (
    <section className="contacto" id="contacto">
      <div className="baner" style={{ backgroundImage: 'url(/images/lobby-2.jpg)' }}>
        <div className="cont-titulo-baner">
          <p>¿Como podemos ayudarte?</p>
          <h1>Contactanos</h1>
        </div>
      </div>

      <form id="formulario-contacto" className="form-contacto" onSubmit={manejoFormulario}>
        <div className="form-group">
          <label htmlFor="email-cont">Email</label>
          <input
            className="form-email"
            onChange={handleEmailChange}
            type="email"
            id="email-cont"
            name="email"
            value={email}
            required
            placeholder="nombre@mail.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="tarea">Envíanos un mensaje</label>
          <textarea
            id="tarea"
            name="mensaje"
            cols="30"
            rows="10"
            required
            placeholder="Mensaje"
            value={mensaje}
            onChange={handleMensajeChange}
          />
        </div>
        <div className="cont-boton">
          <input className="form-boton" type="submit" value="Enviar" />
        </div>
      </form>
    </section>
  );
};

export default Contacto;

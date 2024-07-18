
import {React, useState, useEffect} from "react";

const Clima = () => {
  const [clima, setClima] = useState('');
  const [temp, setTemp] = useState('');
  const [iconoClima, setIconoClima] = useState('');

  const obtenerClima = async () => {
    const apiKey = '17d2c9df0e75edb18ab29ed92e8eadb1'; 
    const lang = 'es';
    const city = 'Buenos Aires'

    try {
      const respuesta = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
      const datosCiudad = await respuesta.json();
      const lat = datosCiudad[0].lat;
      const lon = datosCiudad[0].lon;


      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${lang}&units=metric&appid=${apiKey}`);
      const data = await response.json();
      console.log('clima', data);

      const descripcionClima = data.weather[0].description;
      const temperatura = Math.round(data.main.temp);
      const icono = data.weather[0].icon;

      setClima(` ${descripcionClima.toUpperCase()}`);
      setTemp( `${temperatura}`);
      setIconoClima(`https://openweathermap.org/img/wn/${icono}.png`);

    } catch (error) {
      console.error('Error al obtener el clima:', error);
    }
  };
  
  useEffect(() => {
    obtenerClima();
  }, []);

  return(
      <div className="api-cont-clima">
          <img className="api-icon" src={iconoClima} alt="" />
          <div className="api-temp">{temp}<p>°C</p></div>
          <span className='api-clima'>{clima}</span>
      </div>
  )
}

export default Clima;
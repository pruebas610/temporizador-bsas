import React, { useState, useEffect } from 'react';
import './stylesTemp.css'

const Temporizador = () => {
  // Fecha objetivo: 11 de octubre de 2024 a las 00:00
  const targetDate = new Date('2024-10-11T00:00:00').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null;
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <div>¡El evento ya pasó!</div>;
  }

  return (
    <div className='contenedor-general-temp'>
      <h1>Buenos Aires 11/10</h1>
      <div className='tiempo'>
      <div className='mini-contenedor'>
        Dias <span>{timeLeft.days}</span>
      </div>
      <div className='mini-contenedor'>
        Horas <span>{timeLeft.hours}</span>
      </div>
      <div className='mini-contenedor'>
        Minutos <span>{timeLeft.minutes}</span>
      </div>
      <div className='mini-contenedor'>
        Segundos <span>{timeLeft.seconds}</span>
      </div>
      </div>
    </div>
  );
};

export default Temporizador;

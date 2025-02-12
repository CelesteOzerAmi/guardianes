import React from 'react';
import './Area.css';


const Area = ({tipoArea}) => {
  return (
    <>
      <div className='area'>
        <h2>
          {tipoArea.nombre}
        </h2>
        <p>
          {"Esta área se encuentra usualmente en " + tipoArea.ubicacion}
        </p>
        <p>
          {"Los usuarios han puntuado esta área en " + tipoArea.puntuacion}
        </p>
      </div>

    </>
  )
}

export default Area
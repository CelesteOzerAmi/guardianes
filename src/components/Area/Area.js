import React from 'react';
import './Area.css';


const Area = ({areaType}) => {
  return (
    <>
      <div className='area'>
        <h2>
          {areaType.nombre}
        </h2>
        <p>
          {"Esta área se encuentra usualmente en " + areaType.ubicacion}
        </p>
        <p>
          {"Los usuarios han puntuado esta área en " + areaType.puntuacion}
        </p>
      </div>

    </>
  )
}

export default Area
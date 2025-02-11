import './Especie.css';
import React from 'react'

const Especie = ({ tipoEspecie }) => {
  return (
    <>
      <div className='especie'>
        <h2>
          {tipoEspecie.nombre}
        </h2>
        <p>
          {"Esta especie se encuentra usualmente en " + tipoEspecie.ubicacion}
        </p>
        <p>
          {"Los usuarios han puntuado esta especie en " + tipoEspecie.puntuacion}
        </p>
      </div>

    </>
  )
}

export default Especie
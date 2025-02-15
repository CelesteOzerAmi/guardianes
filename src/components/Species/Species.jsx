import './Species.css';
import React from 'react'

const Species = ({ typeSpecies }) => {
  return (
    <>
      <div className='species'>
        <h2>
          {typeSpecies.nombre}
        </h2>
        <p>
          {"Esta especie se encuentra usualmente en " + typeSpecies.ubicacion}
        </p>
        <p>
          {"Los usuarios han puntuado esta especie en " + typeSpecies.puntuacion}
        </p>
      </div>

    </>
  )
}

export default Species
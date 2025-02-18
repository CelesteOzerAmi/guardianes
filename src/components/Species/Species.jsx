import './Species.css';
import React, { useState } from 'react';
import SpeciesDetail from '../SpeciesDetail/SpeciesDetail';

const Species = ({ typeSpecies }) => {

  const [showSpeciesDetail, setShowSpeciesDetail] = useState(false);

  const handleClick = () => {
    setShowSpeciesDetail(!showSpeciesDetail);
    console.log(showSpeciesDetail)
  }


  return (
    <>
      <div className='species' onClick={handleClick}>
        <h2>
          {typeSpecies.nombre}
        </h2>
        <p>
          {"Esta especie se encuentra usualmente en " + typeSpecies.ubicacion}
        </p>
        <p>
          {"Los usuarios han puntuado esta especie en " + typeSpecies.puntuacion}
        </p>
        {showSpeciesDetail ? <SpeciesDetail SpeciesTypeDetail={typeSpecies} /> : <></>}
      </div>
    </>
  )
}

export default Species
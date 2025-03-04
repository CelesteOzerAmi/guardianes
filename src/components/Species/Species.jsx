import './Species.css';
import React, { useState } from 'react';
import SpeciesDetail from '../SpeciesDetail/SpeciesDetail';

const Species = ({ typeSpecies }) => {

  const [showSpeciesDetail, setShowSpeciesDetail] = useState(false);

  const handleClick = () => {
    setShowSpeciesDetail(!showSpeciesDetail);
  }


  return (
    <>
      <div className='species' onClick={handleClick}>
        <h2>
          {typeSpecies.commonName}
        </h2>
        <p>
          {"Nombre científico: " + typeSpecies.scientificName}
        </p>
        <p>
          {"Categoría: " + typeSpecies.category}
        </p>
        <p>
          {"Estado de conservación: " + typeSpecies.conservationStatus}
        </p>
      </div>
      {showSpeciesDetail ?
        <SpeciesDetail SpeciesTypeDetail={typeSpecies} />
        : <></>}
    </>
  )
}

export default Species
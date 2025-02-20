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
          {"Estado de conservción: " + typeSpecies.conservationStatus}
        </p>
        {showSpeciesDetail ? <SpeciesDetail SpeciesTypeDetail={typeSpecies} /> : <></>}
      </div>
    </>
  )
}

export default Species
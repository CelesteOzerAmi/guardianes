import React, { useEffect, useState } from 'react';
import './Area.css';
import AreaDetail from '../AreaDetail/AreaDetail';


const Area = ({ areaType }) => {

  const [showAreaDetail, setShowAreaDetail] = useState(false);

  const handleClick = () => {

    setShowAreaDetail(!showAreaDetail);
  }

  return (
    <>
      <div className='area' onClick={handleClick}>
        <h2>
          {areaType.name}
        </h2>
        <p>
          {"Esta área se encuentra en: " + areaType.location}
        </p>
        <p>
          {"Tipo de área: " + areaType.areaType}
        </p>
        <p>
          {"Estado de conservación: " + areaType.conservationStatus}
        </p>
        <img src={areaType.imageUrl} alt={areaType.name} />

      </div>
      {showAreaDetail ?
        <AreaDetail areaTypeDetail={areaType} />
        : <></>}
    </>
  )
}

export default Area
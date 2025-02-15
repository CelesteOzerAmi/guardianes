import React, { useEffect, useState } from 'react';
import './Area.css';
import AreaDetail from '../AreaDetail/AreaDetail';


const Area = ({ areaType }) => {

  const [showAreaDetail, setShowAreaDetail] = useState(false);

  const handleClick = () => {
    setShowAreaDetail(!showAreaDetail);
    console.log(showAreaDetail)
  }

  return (
    <>
      <div className='area' onClick={handleClick}>
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
      {showAreaDetail ? <AreaDetail areaTypeDetail={areaType}/> : <></>}
    </>
  )
}

export default Area
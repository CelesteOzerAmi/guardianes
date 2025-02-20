import React, { useState } from 'react';
import './Area.css';
import AreaDetail from '../AreaDetail/AreaDetail';
import Button from 'react-bootstrap/Button';


const Area = ({ areaType }) => {

  const [showAreaDetail, setShowAreaDetail] = useState(false);

  const handleClick = () => {
    setShowAreaDetail(true);
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
        {showAreaDetail ?
          
          <AreaDetail areaTypeDetail={areaType} />
          
          : <></>}
      </div>
    </>
  )
}

export default Area
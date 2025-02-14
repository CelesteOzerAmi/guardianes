import React, { useState } from 'react';
import './Area.css';
import AreaDetail from '../AreaDetail/AreaDetail';


const Area = ({ areaType }) => {
  const [areaClicked, setAreaClicked] = useState(false);
  const [showAreaDetail, setShowAreaDetail] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setAreaClicked(!areaClicked);
    setShowAreaDetail(true);
    //<AreaDetail areaTypeDetail={areaType} modalLoad={true}/>;
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
      {showAreaDetail ? <AreaDetail areaTypeDetail={areaType} modalLoad={true} /> : <div></div>}
    </>
  )
}

export default Area
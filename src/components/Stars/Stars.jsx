import React from 'react';
import { useSelector } from 'react-redux';

const Stars = () => {

  const user = useSelector((state) => state.user);

  return (
    <>
      {
        user ?
          <>
            <div>
              starsssss
            </div>
          </>
          :
          <></>
      }
    </>
  )
}

export default Stars;

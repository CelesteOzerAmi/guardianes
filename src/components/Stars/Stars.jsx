import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './Stars.css'

const Stars = () => {

  const [ratingValue, setRatingValue] = useState(2);

  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <p>Puntuación:</p>
      <Rating
        name="simple-controlled"
        value={ratingValue}
        onChange={(event, newValue) => {
          setRatingValue(newValue);
        }}
      />
    
    </Box>

  )
}

export default Stars;

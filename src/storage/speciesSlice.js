import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const speciesSlice = createSlice({
  name: "species",
  initialState,
  reducers: {
    setSpecies: (_, action) => action.payload,
    restart: () => null, 
  },
});

export const { setSpecies, restart } = speciesSlice.actions;
export default speciesSlice.reducer; 

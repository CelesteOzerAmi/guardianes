import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const areaSlice = createSlice({
  name: "area",
  initialState,
  reducers: {
    setArea: (_, action) => action.payload,
    restart: () => null, 
  },
});

export const { setArea, restart } = areaSlice.actions;
export default areaSlice.reducer; 

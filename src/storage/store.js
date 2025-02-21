import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import areaReducer from "./areaSlice";
import speciesReducer from "./speciesSlice"; 

export const store = configureStore({
  reducer: {
    user: userReducer,
    area : areaReducer,
    species : speciesReducer,
  },
});


export default store;

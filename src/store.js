import { configureStore } from "@reduxjs/toolkit";
import  mainSliceReducer  from "./slice/mainSlice";

// Example of a slice reducer, you can create more or import them



const store = configureStore({
  reducer: {
    main: mainSliceReducer,
    // Add other reducers here
  },
});

export default store;

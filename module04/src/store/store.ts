import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "./reducer/playerSlice";

const store=configureStore({
     reducer: {playerSlices:playerSlice},
     
})
export default store
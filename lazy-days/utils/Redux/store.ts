import { configureStore } from "@reduxjs/toolkit";
import sharedSlice from "./sharedSlice";

export const store = configureStore({
    reducer: {
        shared: sharedSlice
    }
})
import { configureStore } from "@reduxjs/toolkit";
import changeState from "./reducer";
export const store = configureStore({
    reducer: { search: changeState },
});
import { configureStore, createStore } from "@reduxjs/toolkit";
import { initState } from "./const";
import reducer from "./reducer";

export const store = createStore(reducer, initState);

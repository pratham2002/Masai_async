import { createStore } from "redux";
import { initialState } from "./initialState";
import { reducer } from "./reducer";
import { applyMiddleware } from "redux";
export const store = createStore(reducer, initialState);

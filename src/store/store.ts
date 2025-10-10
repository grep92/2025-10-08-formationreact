import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentReducer from "./current";
import resourceReducer from "./resources";
import { loadResources } from "./asyncCaller";

const store = configureStore({
    reducer: combineReducers({
        current: currentReducer, 
        resources: resourceReducer}),
    // Si on veut désactiver les DevTools devTools: false 
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

store.dispatch(loadResources());
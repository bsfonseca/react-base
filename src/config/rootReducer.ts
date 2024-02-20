import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const combinedReducers = combineReducers({});

export const persistedReducers = persistReducer(
    {
        key: "root",
        storage,
    },
    combinedReducers
);

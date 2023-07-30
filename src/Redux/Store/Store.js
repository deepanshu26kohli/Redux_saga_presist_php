import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import RootReducer from "../Reducers/RootReducer"; 
import productSaga from "../Saga/ProductSaga"
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()
const persistConfig = {
  key: 'root',
  storage, 
};
const persistedReducer = persistReducer(persistConfig, RootReducer);
export const store = configureStore(
    {
    reducer : persistedReducer,
    middleware: [sagaMiddleware]
    }
);
export const persistor = persistStore(store);
sagaMiddleware.run(productSaga)
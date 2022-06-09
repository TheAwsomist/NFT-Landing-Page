import { configureStore } from '@reduxjs/toolkit';
import { NftReducer } from './Reducer';


export const NftStore = configureStore({reducer:NftReducer, devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()});

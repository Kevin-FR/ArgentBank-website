import { configureStore } from '@reduxjs/toolkit';

import { alertReducer } from './alert.slice';
import { authReducer } from './auth.slice';
import { paramsReducer } from './params.slice';
import { profileReducer } from './profile.slice';



export * from './alert.slice';
export * from './auth.slice';
export * from './profile.slice';


export const store = configureStore({
    reducer: {
        alert: alertReducer,
        auth: authReducer,
        profile: profileReducer,
        params: paramsReducer,
    },
});
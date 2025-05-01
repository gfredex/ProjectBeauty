import { configureStore } from '@reduxjs/toolkit';
import userTypeReducer from './slices/userTypeSlice';

export const store = configureStore({
    reducer: {
        userType: userTypeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
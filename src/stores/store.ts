import { configureStore } from '@reduxjs/toolkit';
import userTypeReducer from './slices/userTypeSlice';
import masterReducer  from './slices/userSlice';

export const store = configureStore({
    reducer: {
        userType: userTypeReducer,
        master: masterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
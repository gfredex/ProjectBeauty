import { configureStore } from '@reduxjs/toolkit';
import userTypeReducer from './slices/userTypeSlice';
import masterReducer  from './slices/masterSlice.ts';
import filtersReducer   from './slices/filtersSlice.ts';

export const store = configureStore({
    reducer: {
        userType: userTypeReducer,
        master: masterReducer,
        filters: filtersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
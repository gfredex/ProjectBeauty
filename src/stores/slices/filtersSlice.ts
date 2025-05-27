import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FiltersState = {
    district: string | null;
    searchTriggered: boolean;
};

const initialState: FiltersState = {
    district: null,
    searchTriggered: false,
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setDistrict: (state, action: PayloadAction<string>) => {
            state.district = action.payload;
        },
        setSearchTriggered: (state, action: PayloadAction<boolean>) => {
            state.searchTriggered = action.payload;
        },
    },
});

export const { setDistrict, setSearchTriggered } = filtersSlice.actions;
export default filtersSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
    name: string;
    email: string;
    phone: string;
};

const defaultUser: UserState = {
    name: 'Маргарита Чернышова',
    email: 'margarita.chernushova@gmail.com',
    phone: '89-990-078',
};

const savedUser = localStorage.getItem('userProfile');
if (!savedUser) {
    localStorage.setItem('userProfile', JSON.stringify(defaultUser));
}

const initialState: UserState = savedUser ? JSON.parse(savedUser) : defaultUser;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateProfile(state, action: PayloadAction<UserState>) {
            Object.assign(state, action.payload);
            localStorage.setItem('userProfile', JSON.stringify(state));
        },
    },
});

export const { updateProfile } = userSlice.actions;
export default userSlice.reducer;
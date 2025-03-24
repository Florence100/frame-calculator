import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    length: 0,
    width: 0,
    material: null,
    pipe: null,
    strength: null,
};

const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        updateInput(state, action) {
            const { field, value } = action.payload;
            state[field] = value;
        },
    },
});

export const { updateInput } = inputSlice.actions;
export default inputSlice.reducer;

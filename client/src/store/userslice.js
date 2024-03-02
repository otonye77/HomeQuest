import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: null,
        loading: false,
        error: null
    },
    reducers: {
        registerStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        registerSuccess: (state, action) => {
            state.loading = false;
            state.userData = action.payload;
        },
        registerFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.userData = action.payload;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {
    registerStart,
    registerSuccess,
    registerFailure,
    loginStart,
    loginSuccess,
    loginFailure
} = userSlice.actions;

export default userSlice.reducer;

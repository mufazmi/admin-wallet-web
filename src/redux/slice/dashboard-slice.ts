import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLoading: true,
    navigations: []
}


const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        getNavigations: (state, action) => {
            state.isLoading = true;

        },

        setNavigations: (state, action) => {
            state.isLoading = false

        },

        failedNavigations: (state, action) => {
            state.isLoading = false

        }
    }
});

export const { getNavigations, setNavigations, failedNavigations } = dashboardSlice.actions
export default dashboardSlice.reducer
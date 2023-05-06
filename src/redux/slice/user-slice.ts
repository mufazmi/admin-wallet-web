import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DashboardState {
    isUserListLoading: boolean;
    isUserDetailsLoading: boolean;
    navigations: any[];
}

const initialState: DashboardState = {
    isUserListLoading: true,
    isUserDetailsLoading: true,
    navigations: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserList: (state) => {
            state.isUserListLoading = true;
        },
        setUserList: (state, action: PayloadAction<any>) => {
            state.isUserListLoading = false;
            state.navigations = action.payload;
        },
        failedUserList: (state) => {
            state.isUserListLoading = false;
            state.navigations = [];
        },

        getUserDetails: (state) => {
            state.isUserDetailsLoading = true;
        },
        setUserDetails: (state, action: PayloadAction<any>) => {
            state.isUserDetailsLoading = false;
            state.navigations = action.payload;
        },
        failedUserDetails: (state) => {
            state.isUserDetailsLoading = false;
            state.navigations = [];
        },
    },
});

export const {
    getUserList,
    setUserList,
    failedUserList,
    getUserDetails,
    setUserDetails,
    failedUserDetails
} =
    userSlice.actions;

export default userSlice.reducer;

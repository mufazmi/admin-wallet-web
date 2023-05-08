import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DashboardState {
    isUserListLoading: boolean;
    isUserDetailsLoading: boolean;
    // users: any[];
    users: {};
}

const initialState: DashboardState = {
    isUserListLoading: true,
    isUserDetailsLoading: true,
    users: {},
    // users: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserList: (state,action: PayloadAction<any>) => {
            state.isUserListLoading = true;
        },
        setUserList: (state, action: PayloadAction<any>) => {
            state.isUserListLoading = false;
            state.users = action.payload?.user_list;
        },
        failedUserList: (state) => {
            state.isUserListLoading = false;
            state.users = [];
        },

        getUserDetails: (state,action: PayloadAction<any>) => {
            state.isUserDetailsLoading = true;
        },
        setUserDetails: (state, action: PayloadAction<any>) => {
            state.isUserDetailsLoading = false;
            state.users = action.payload;
        },
        failedUserDetails: (state) => {
            state.isUserDetailsLoading = false;
            state.users = [];
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

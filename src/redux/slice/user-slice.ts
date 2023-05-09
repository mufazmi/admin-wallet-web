import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DashboardState {
    isUserListLoading: boolean;
    isUserDetailsLoading: boolean;
    // users: any[];
    users: {};
    user: IUserDetail;
    business: IBusiness;
}

interface IUserDetail {
    date_of_birth?: string;
    gender?: string;
    married?: string | null;
    father_or_spousename?: string;
    pan_no?: string | null;
    aadhar_no?: string;
    address?: {
        area: string;
        city: string;
        line: string;
        state: string;
        pincode: string;
        district: string;
    };
    pan_front?: string | null;
    aadhar_front?: string | null;
    aadhar_back?: string | null;
    verify_at?: string | null;
}
interface IBusiness {
    legal_name?: string;
    entity_type?: string;
    address?: {
        area: string;
        city: string;
        line: string;
        state: string;
        pincode: string;
        district: string;
    };
    date_of_registration?: string;
    registration_no?: string;
    gst_no?: string;
    board_resolution?: string | null;
    reg_certificate?: string | null;
    verified_by?: string | null;
    status?: string;
}


const initialState: DashboardState = {
    isUserListLoading: true,
    isUserDetailsLoading: true,
    users: {},
    user: {},
    business:{}
    // users: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserList: (state, action: PayloadAction<any>) => {
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

        getUserDetails: (state, action: PayloadAction<any>) => {
            state.isUserDetailsLoading = true;
        },
        setUserDetails: (state, action: PayloadAction<any>) => {
            state.isUserDetailsLoading = false;
            state.user = action.payload.user;
            state.business = action.payload.business;
        },
        failedUserDetails: (state) => {
            state.isUserDetailsLoading = false;
            state.user = {};
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

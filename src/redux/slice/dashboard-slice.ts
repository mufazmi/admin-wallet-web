import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DashboardState {
  isLoading: boolean;
  navigations: any[]; 
}

const initialState: DashboardState = {
  isLoading: true,
  navigations: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    getNavigations: (state) => {
      state.isLoading = true;
      console.log("dashboardSlice->getNavigations");
    },
    setNavigations: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.navigations = action.payload;
    },
    failedNavigations: (state) => {
      state.isLoading = false;
      state.navigations = [];
    },
  },
});

export const { getNavigations, setNavigations, failedNavigations } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;

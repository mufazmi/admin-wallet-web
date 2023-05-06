import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
    isLoading: boolean;
    isSummariesLoading: boolean;
    isFetchBalanceLoading: boolean;
    isDepositLoading: boolean;
    isBalanceTransferLoading: boolean;
    isPurchaseOrderLoading: boolean;
    walletSummaries: any[];
    metaData?: any,
}

const initialState: State = {
    isLoading: true,
    isSummariesLoading: true,
    isFetchBalanceLoading: true,
    isDepositLoading: true,
    isBalanceTransferLoading: true,
    isPurchaseOrderLoading: true,
    walletSummaries: [],
    metaData: {}
};

const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        getWalletSummaries: (state) => {
            state.isSummariesLoading = true;
        },
        setWalletSummaries: (state, action: PayloadAction<any>) => {
            state.isSummariesLoading = false;
            const { total_rows, page, limits, results } = action.payload;
            state.metaData = {
                total_rows,
                page,
                limits
            }
            state.walletSummaries = results
        },
        failedWalletSummaries: (state) => {
            state.isSummariesLoading = false;
            state.walletSummaries = [];
        },

        //Balance
        getFetchBalance: (state) => {
            state.isFetchBalanceLoading = true;
        },
        setFetchBalance: (state, action: PayloadAction<any>) => {
            state.isFetchBalanceLoading = false;
            const { total_rows, page, limits, results } = action.payload;
            state.metaData = {
                total_rows,
                page,
                limits
            }
            state.walletSummaries = results
        },
        failedFetchBalance: (state) => {
            state.isFetchBalanceLoading = false;
            state.walletSummaries = [];
        },

        //Deposit
        getDeposit: (state) => {
            state.isDepositLoading = true;
        },
        setDeposit: (state, action: PayloadAction<any>) => {
            state.isDepositLoading = false;
            const { total_rows, page, limits, results } = action.payload;
            state.metaData = {
                total_rows,
                page,
                limits
            }
            state.walletSummaries = results
        },
        failedDeposit: (state) => {
            state.isDepositLoading = false;
            state.walletSummaries = [];
        },

        //BalanceTransfer
        getBalanceTransfer: (state) => {
            state.isBalanceTransferLoading = true;
        },
        setBalanceTransfer: (state, action: PayloadAction<any>) => {
            state.isBalanceTransferLoading = false;
            const { total_rows, page, limits, results } = action.payload;
            state.metaData = {
                total_rows,
                page,
                limits
            }
            state.walletSummaries = results
        },
        failedBalanceTransfer: (state) => {
            state.isBalanceTransferLoading = false;
            state.walletSummaries = [];
        },

        //PurchaseOrder
        getPurchaseOrder: (state) => {
            state.isPurchaseOrderLoading = true;
        },
        setPurchaseOrder: (state, action: PayloadAction<any>) => {
            state.isPurchaseOrderLoading = false;
            const { total_rows, page, limits, results } = action.payload;
            state.metaData = {
                total_rows,
                page,
                limits
            }
            state.walletSummaries = results
        },
        failedPurchaseOrder: (state) => {
            state.isPurchaseOrderLoading = false;
            state.walletSummaries = [];
        },


    },
});

export const {
    getWalletSummaries,
    setWalletSummaries,
    failedWalletSummaries,

    getFetchBalance,
    setFetchBalance,
    failedFetchBalance,

    getDeposit,
    setDeposit,
    failedDeposit,

    getBalanceTransfer,
    setBalanceTransfer,
    failedBalanceTransfer,

    getPurchaseOrder,
    setPurchaseOrder,
    failedPurchaseOrder
} =
    walletSlice.actions;

export default walletSlice.reducer;

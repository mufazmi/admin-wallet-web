import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
    isLoading: boolean;
    isSummariesLoading: boolean;
    isFetchBalanceLoading: boolean;
    isDepositProcessing: boolean;
    isBalanceTransferLoading: boolean;
    isPurchaseOrderProcessing: boolean;
    walletSummaries: any[];
    metaData?: any,
    errors: {
        amount?: number
    }
}
const errors = {
    amount: ''
}

const initialState: State = {
    isLoading: true,
    isSummariesLoading: true,
    isFetchBalanceLoading: true,
    isDepositProcessing: false,
    isBalanceTransferLoading: true,
    isPurchaseOrderProcessing: false,
    walletSummaries: [],
    metaData: {},
    errors: {
        amount: undefined
    }
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
        getDeposit: (state,action) => {
            state.isDepositProcessing = true;
        },
        setDeposit: (state, action: PayloadAction<any>) => {
            state.isDepositProcessing = false;
            const { total_rows, page, limits, results } = action.payload;
            state.metaData = {
                total_rows,
                page,
                limits
            }
            state.walletSummaries = results
        },
        failedDeposit: (state) => {
            state.isDepositProcessing = false;
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
            state.isPurchaseOrderProcessing = true;
        },
        setPurchaseOrder: (state, action: PayloadAction<any>) => {
            state.isPurchaseOrderProcessing = false;
            const { total_rows, page, limits, results } = action.payload;
            state.metaData = {
                total_rows,
                page,
                limits
            }
            state.walletSummaries = results
        },
        failedPurchaseOrder: (state) => {
            state.isPurchaseOrderProcessing = false;
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
